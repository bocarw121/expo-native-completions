import * as vscode from "vscode";

/**
 * Registers a hover provider for a specific language with the given keywords.
 * @param language - The language for which to register the hover provider.
 * @param keywords - An object containing keywords as keys and their corresponding hover text as values.
 * @returns A `vscode.Disposable` that can be used to unregister the hover provider.
 */
export function registerHoverProvider(
  language: string,
  keywords: { [key: string]: string }
) {
  return vscode.languages.registerHoverProvider(language, {
    provideHover(document: vscode.TextDocument, position: vscode.Position) {
      const range = document.getWordRangeAtPosition(position);
      const word = document.getText(range);
      if (keywords[word]) {
        return new vscode.Hover(new vscode.MarkdownString(keywords[word]));
      }
      return null;
    },
  });
}
