import { registerCompletionProvider } from "../../utils/registerCompletionProvider";
import { asyncFunctionDoc, functionDoc } from "../documentation";

const swiftFun = registerCompletionProvider({
  language: "swift",
  label: "Function",
  scheme: "file",
  textToInsert: `Function`,
  doc: functionDoc,
  triggerWord: "Fu",
});

const swiftAsyncFun = registerCompletionProvider({
  language: "swift",
  label: "AsyncFunction",
  scheme: "file",
  textToInsert: `AsyncFunction`,
  doc: asyncFunctionDoc,
  triggerWord: "As",
  dependency: "expo.modules.kotlin",
});

export const swiftProviders = [swiftFun, swiftAsyncFun];
