import { registerCompletionProvider } from "../../utils/registerCompletionProvider";
import { asyncFunctionDoc, functionDoc } from "../documentation";

const kotlinFun = registerCompletionProvider({
  language: "kotlin",
  label: "Function",
  scheme: "file",
  textToInsert: `Function`,

  doc: functionDoc,
  triggerWord: "Fu",
});

const kotlinAsyncFun = registerCompletionProvider({
  language: "kotlin",
  label: "AsyncFunction",
  scheme: "file",
  textToInsert: `AsyncFunction`,
  doc: asyncFunctionDoc,

  triggerWord: "As",
});

// Name("MyModuleName")

const kotlinName = registerCompletionProvider({
  language: "kotlin",
  label: "Name",
  scheme: "file",
  textToInsert: `Name`,

  doc: functionDoc,
  triggerWord: "Na",
});

export const kotlinProviders = [kotlinFun, kotlinAsyncFun, kotlinName];
