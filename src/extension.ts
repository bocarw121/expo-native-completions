import * as vscode from "vscode";

import { isExpoProject } from "./utils";
import { kotlinHoverProvider, kotlinProviders } from "./completions/kotlin";
import { swiftHoverProvider, swiftProviders } from "./completions/swift";

export function activate(context: vscode.ExtensionContext) {
  if (isExpoProject()) {
    const disposable = vscode.commands.registerCommand(
      "expo-native-completions.enable",
      () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage(
          "Expo Native Completions enabled!"
        );
      }
    );

    context.subscriptions.push(disposable);

    context.subscriptions.push(...kotlinProviders);
    context.subscriptions.push(...swiftProviders);
    context.subscriptions.push(kotlinHoverProvider);
    context.subscriptions.push(swiftHoverProvider);
  }
}

export function deactivate() {}
