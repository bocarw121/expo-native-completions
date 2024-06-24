import * as vscode from "vscode";

import { isExpoProject } from "./utils";
import { kotlinHoverProvider, kotlinProviders } from "./completions/kotlin";
import { swiftHoverProvider, swiftProviders } from "./completions/swift";

export function activate(context: vscode.ExtensionContext) {
  if (isExpoProject()) {
    context.subscriptions.push(...kotlinProviders);
    context.subscriptions.push(...swiftProviders);
    context.subscriptions.push(kotlinHoverProvider);
    context.subscriptions.push(swiftHoverProvider);
  }
}

export function deactivate() {}
