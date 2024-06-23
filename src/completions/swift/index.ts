import { registerCompletionProvider } from "../../utils";
import {
  asyncFunctionDoc,
  functionDoc,
  nameDoc,
  constantsDoc,
  propertyDoc,
  eventsDoc,
  onCreateDoc,
  onDestroyDoc,
  onStartObservingDoc,
  onStopObservingDoc,
  onAppContextDestroysDoc,
  onAppEntersForegroundDoc,
  onAppEntersBackgroundDoc,
  onAppBecomesActiveDoc,
} from "../documentation";

// Constants
const swiftConstants = registerCompletionProvider({
  language: "swift",
  label: "Constants",
  scheme: "file",
  textToInsert: `Constants`,
  doc: constantsDoc,
  triggerWord: "Co",
});

// Property
const swiftProperty = registerCompletionProvider({
  language: "swift",
  label: "Property",
  scheme: "file",
  textToInsert: `Property`,
  doc: propertyDoc,
  triggerWord: "Pro",
});

// Events

const swiftEvents = registerCompletionProvider({
  language: "swift",
  label: "Events",
  scheme: "file",
  textToInsert: `Events`,
  doc: eventsDoc,
  triggerWord: "Ev",
});

// Function
const swiftFun = registerCompletionProvider({
  language: "swift",
  label: "Function",
  scheme: "file",
  textToInsert: `Function`,
  doc: functionDoc,
  triggerWord: "Fu",
});

// AsyncFunction
const swiftAsyncFun = registerCompletionProvider({
  language: "swift",
  label: "AsyncFunction",
  scheme: "file",
  textToInsert: `AsyncFunction`,
  doc: asyncFunctionDoc,
  triggerWord: "As",
});

// Name
const swiftName = registerCompletionProvider({
  language: "swift",
  label: "Name",
  scheme: "file",
  textToInsert: `Name`,
  doc: nameDoc,
  triggerWord: "Na",
});

// OnCreate
const swiftOnCreate = registerCompletionProvider({
  language: "swift",
  label: "OnCreate",
  scheme: "file",
  textToInsert: `OnCreate`,
  doc: onCreateDoc,
  triggerWord: "On",
});

// OnDestroy
const swiftOnDestroy = registerCompletionProvider({
  language: "swift",
  label: "OnDestroy",
  scheme: "file",
  textToInsert: `OnDestroy`,
  doc: onDestroyDoc,
  triggerWord: "On",
});

// OnStartObserving
const swiftOnStartObserving = registerCompletionProvider({
  language: "swift",
  label: "OnStartObserving",
  scheme: "file",
  textToInsert: `OnStartObserving`,
  doc: onStartObservingDoc,
  triggerWord: "On",
});

// OnStopObserving
const swiftOnStopObserving = registerCompletionProvider({
  language: "swift",
  label: "OnStopObserving",
  scheme: "file",
  textToInsert: `OnStopObserving`,
  doc: onStopObservingDoc,
  triggerWord: "On",
});

// OnAppContextDestroys
const swiftOnAppContextDestroys = registerCompletionProvider({
  language: "swift",
  label: "OnAppContextDestroys",
  scheme: "file",
  textToInsert: `OnAppContextDestroys`,
  doc: onAppContextDestroysDoc,
  triggerWord: "On",
});

// OnAppEntersForeground
const swiftOnAppEntersForeground = registerCompletionProvider({
  language: "swift",
  label: "OnAppEntersForeground",
  scheme: "file",
  textToInsert: `OnAppEntersForeground`,
  doc: onAppEntersForegroundDoc,
  triggerWord: "On",
});

// OnAppEntersBackground
const swiftOnAppEntersBackground = registerCompletionProvider({
  language: "swift",
  label: "OnAppEntersBackground",
  scheme: "file",
  textToInsert: `OnAppEntersBackground`,
  doc: onAppEntersBackgroundDoc,
  triggerWord: "On",
});

// OnAppBecomesActive
const swiftOnAppBecomesActive = registerCompletionProvider({
  language: "swift",
  label: "OnAppBecomesActive",
  scheme: "file",
  textToInsert: `OnAppBecomesActive`,
  doc: onAppBecomesActiveDoc,
  triggerWord: "On",
});

export const swiftProviders = [
  swiftFun,
  swiftAsyncFun,
  swiftProperty,
  swiftConstants,
  swiftEvents,
  swiftName,
  swiftOnCreate,
  swiftOnDestroy,
  swiftOnStartObserving,
  swiftOnStopObserving,
  swiftOnAppContextDestroys,
  swiftOnAppEntersForeground,
  swiftOnAppEntersBackground,
  swiftOnAppBecomesActive,
];
