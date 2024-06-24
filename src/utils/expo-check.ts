import * as fs from "fs";
import * as path from "path";

export function isExpoProject(): boolean {
  const rootDir = path.resolve("."); // Get the root directory

  const appJsonPath = path.join(rootDir, "app.json");
  const packageJsonPath = path.join(rootDir, "package.json");

  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    if (
      packageJson.dependencies &&
      packageJson.dependencies["expo-modules-core"]
    ) {
      return true;
    }
  }

  if (fs.existsSync(appJsonPath)) {
    return true;
  }

  return false;
}
