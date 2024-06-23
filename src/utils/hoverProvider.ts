import * as vscode from "vscode";

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
