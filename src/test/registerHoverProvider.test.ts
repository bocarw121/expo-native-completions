import * as assert from "assert";
import * as vscode from "vscode";

import { registerHoverProvider } from "../utils";

suite("Hover Provider Tests", () => {
  test("Should provide hover for valid keyword", () => {
    const keywords = {
      keyword1: "This is the hover content for keyword1",
      keyword2: "This is the hover content for keyword2",
    };

    const hoverProvider = registerHoverProvider("language", keywords);

    assert.ok(hoverProvider instanceof vscode.Disposable);

    hoverProvider.dispose();
  });
});
