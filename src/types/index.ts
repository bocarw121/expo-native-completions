import type { CompletionItemKind } from "vscode";

type Label =
  // ios and android
  | "Name"
  | "Constants"
  | "Function"
  | "AsyncFunction"
  | "Property"
  | "Events"
  // View ios and android
  | "View"
  | "Prop"
  // View android
  | "GroupView"
  | "AddChildView"
  | "GetChildCount"
  | "GetChildView"
  | "GetChildViewAt"
  | "RemoveChildView"
  | "RemoveChildViewAt"
  // Lifecycle ios and android
  | "OnCreate"
  | "OnDestroy"
  | "OnStartObserving"
  | "OnStopObserving"
  // ios
  | "OnAppContextDestroys"
  | "OnAppEntersForeground"
  | "OnAppEntersBackground"
  | "OnAppBecomesActive"
  // android
  | "OnActivityEntersForeground"
  | "OnActivityEntersBackground"
  | "OnActivityDestroys";

type TriggerWord =
  | "Fu"
  | "As"
  | "Pro"
  | "Vi"
  | "Pr"
  | "Ev"
  | "Co"
  | "Na"
  | "Gr"
  | "Ad"
  | "Ge"
  | "Re"
  | "On";

export interface CompletionProviderConfig {
  language: "kotlin" | "swift" | "both";
  scheme: "file";
  label: Label; // Label for the completion item
  textToInsert: string; // Example text to insert
  doc: string; // Example function documentation
  triggerWord: TriggerWord; // Word to trigger completion
  dependency?: string; // Whether to import dependency
  completionKind?: CompletionItemKind; // Completion kind
}
