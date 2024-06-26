import * as assert from "assert";
import * as vscode from "vscode";

import { activate } from "../extension";

suite("Extension Tests", () => {
  vscode.window.showInformationMessage("Start all tests.");
  let context = {
    subscriptions: [],
    extensionPath: "",
    asAbsolutePath: () => "",
  } as any;

  test("Extension should be activated for Expo projects", () => {
    activate(context);

    assert.strictEqual(
      context.subscriptions.length,
      40,
      "Expected 40 subscriptions to be added"
    );
  });
});
