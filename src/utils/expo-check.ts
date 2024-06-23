import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

export function isExpoProject(): boolean {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) {
    return false;
  }
  for (const folder of workspaceFolders) {
    const appJsonPath = path.join(folder.uri.fsPath, "app.json");
    if (fs.existsSync(appJsonPath)) {
      return true;
    }
  }
  return false;
}
