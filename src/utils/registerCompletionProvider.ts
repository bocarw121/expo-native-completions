import * as vscode from "vscode";
import { CompletionProviderConfig } from "../types";

/**
 * Registers a completion provider for a specific language and scheme.
 * @param {CompletionProviderConfig} config - The configuration object for the completion provider.
 * @returns {vscode.Disposable} - A disposable object that can be used to unregister the completion provider.
 */
export function registerCompletionProvider({
  language,
  scheme,
  label,
  textToInsert,
  doc,
  triggerWord,
  completionKind = 2,
}: CompletionProviderConfig): vscode.Disposable {
  const provider = vscode.languages.registerCompletionItemProvider(
    { language, scheme },
    {
      provideCompletionItems(
        _document: vscode.TextDocument,
        _position: vscode.Position
      ) {
        const completion = new vscode.CompletionItem(label, completionKind);
        completion.insertText = new vscode.SnippetString(textToInsert);
        completion.documentation = new vscode.MarkdownString(doc);
        completion.kind = completionKind || vscode.CompletionItemKind.Text;

        // completion.detail = label;

        return {
          isIncomplete: false,
          items: [completion],
        };
      },
    },
    ...triggerWord // Trigger completions after typing each character in triggerWord
  );

  return provider;
}
