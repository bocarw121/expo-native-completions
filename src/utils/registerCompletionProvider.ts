import * as vscode from "vscode";
import { CompletionProviderConfig } from "../types";

/**
 * Registers a completion provider for a specific language and scheme.
 * @param config Configuration object for the completion provider.
 * @returns A disposable object that can be used to unregister the provider.
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
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        const completion = new vscode.CompletionItem(label, completionKind);
        completion.insertText = new vscode.SnippetString(textToInsert);
        completion.documentation = new vscode.MarkdownString(doc);

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
