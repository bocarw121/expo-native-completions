import * as fs from "fs/promises";
import * as vscode from "vscode";
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it

import { activate } from "../extension";
import { kotlinProviders, kotlinHoverProvider } from "../completions/kotlin";
import { swiftProviders, swiftHoverProvider } from "../completions/swift";
import * as assert from "assert";
import { afterEach, beforeEach } from "mocha";

// import * as myExtension from '../../extension';

suite("Extension Tests", () => {
  vscode.window.showInformationMessage("Start all tests.");
  let context = {
    subscriptions: [],
    extensionPath: "",
    asAbsolutePath: () => "",
  } as any;

  beforeEach(async () => {
    context.subscriptions.push(...kotlinProviders);
    context.subscriptions.push(...swiftProviders);
    context.subscriptions.push(kotlinHoverProvider);
    context.subscriptions.push(swiftHoverProvider);
  });

  afterEach(() => {
    context.subscriptions.forEach((subscription: any) => {
      subscription.dispose();
    });
    context.subscriptions = [];
  });

  test("Extension should be activated for Expo projects", () => {
    activate(context);

    assert.strictEqual(
      context.subscriptions.length,
      40,
      "Expected 40 subscriptions to be added"
    );
  });
});
