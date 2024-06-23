import type { CompletionItemKind } from "vscode";

type Label =
  | "Function"
  | "AsyncFunction"
  | "Property"
  | "View"
  | "Prop"
  | "Events"
  | "Constants"
  | "Name";

type TriggerWord = "Fu" | "As" | "Pro" | "Vi" | "Pr" | "Ev" | "Co" | "Na";

export interface CompletionProviderConfig {
  language: "kotlin" | "swift";
  scheme: "file";
  label: Label; // Label for the completion item
  textToInsert: string; // Example text to insert
  doc: string; // Example function documentation
  triggerWord: TriggerWord; // Word to trigger completion
  dependency?: string; // Whether to import dependency
  completionKind?: CompletionItemKind; // Completion kind
}
