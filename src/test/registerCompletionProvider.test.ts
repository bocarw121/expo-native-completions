import * as assert from "assert";
import * as vscode from "vscode";

import { registerCompletionProvider } from "../utils/registerCompletionProvider";
import { CompletionProviderConfig } from "../types";

suite("Extension Tests", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("registerCompletionProvider should return a disposable object", () => {
    const config: CompletionProviderConfig = {
      language: "kotlin",
      scheme: "file",
      label: "AddChildView",
      textToInsert: "AddChildView",
      doc: "Test completion provider",
      triggerWord: "Ad",
    };

    const disposable = registerCompletionProvider(config);
    assert.ok(disposable instanceof vscode.Disposable);

    disposable.dispose();
  });

  // Add more tests as needed
});
