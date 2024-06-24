import * as assert from "assert";
import * as fs from "fs/promises";
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";

import { isExpoProject } from "../utils";
// import * as myExtension from '../../extension';

suite("Test isExpoProject function", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("isExpoProject should be true when  in expo project", async () => {
    await fs.writeFile("app.json", JSON.stringify({ expo: {} }, null, 2));
    assert.strictEqual(isExpoProject(), true);

    await fs.unlink("app.json");
  });

  test("isExpoProject should be false when not in expo project", () => {
    assert.strictEqual(isExpoProject(), false);
  });
});
