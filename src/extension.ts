import * as vscode from "vscode";
import { kotlinHoverProvider, kotlinProviders } from "./completions/kotlin";
import { swiftHoverProvider, swiftProviders } from "./completions/swift";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(...kotlinProviders);
  context.subscriptions.push(...swiftProviders);
  context.subscriptions.push(kotlinHoverProvider);
  context.subscriptions.push(swiftHoverProvider);

  vscode.window.showInformationMessage("Expo Native Completions enabled!");
}

export function deactivate() {}
