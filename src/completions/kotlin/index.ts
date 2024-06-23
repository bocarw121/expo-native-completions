import { registerCompletionProvider } from "../../utils/registerCompletionProvider";
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
  groupViewDoc,
  addChildViewDoc,
  getChildCountDoc,
  getChildViewAtDoc,
  removeChildViewDoc,
  removeChildViewAtDoc,
  onActivityEntersForegroundDoc,
  onActivityEntersBackgroundDoc,
  onActivityDestroysDoc,
} from "../documentation";

// Constants
const kotlinConstants = registerCompletionProvider({
  language: "kotlin",
  label: "Constants",
  scheme: "file",
  textToInsert: `Constants`,
  doc: constantsDoc,
  triggerWord: "Co",
});

// Property
const kotlinProperty = registerCompletionProvider({
  language: "kotlin",
  label: "Property",
  scheme: "file",
  textToInsert: `Property`,
  doc: propertyDoc,
  triggerWord: "Pro",
});

// Events

const kotlinEvents = registerCompletionProvider({
  language: "kotlin",
  label: "Events",
  scheme: "file",
  textToInsert: `Events`,
  doc: eventsDoc,
  triggerWord: "Ev",
});

// Function
const kotlinFun = registerCompletionProvider({
  language: "kotlin",
  label: "Function",
  scheme: "file",
  textToInsert: `Function`,
  doc: functionDoc,
  triggerWord: "Fu",
});

// AsyncFunction
const kotlinAsyncFun = registerCompletionProvider({
  language: "kotlin",
  label: "AsyncFunction",
  scheme: "file",
  textToInsert: `AsyncFunction`,
  doc: asyncFunctionDoc,
  triggerWord: "As",
});

// Name
const kotlinName = registerCompletionProvider({
  language: "kotlin",
  label: "Name",
  scheme: "file",
  textToInsert: `Name`,
  doc: nameDoc,
  triggerWord: "Na",
});

// GroupView
const kotlinGroupView = registerCompletionProvider({
  language: "kotlin",
  label: "GroupView",
  scheme: "file",
  textToInsert: `GroupView`,
  doc: groupViewDoc,
  triggerWord: "Gr",
});

// AddChildView
const kotlinAddChildView = registerCompletionProvider({
  language: "kotlin",
  label: "AddChildView",
  scheme: "file",
  textToInsert: `AddChildView`,
  doc: addChildViewDoc,
  triggerWord: "Ad",
});

// GetChildCount
const kotlinGetChildCount = registerCompletionProvider({
  language: "kotlin",
  label: "GetChildCount",
  scheme: "file",
  textToInsert: `GetChildCount`,
  doc: getChildCountDoc,
  triggerWord: "Ge",
});

// GetChildViewAt
const kotlinGetChildViewAt = registerCompletionProvider({
  language: "kotlin",
  label: "GetChildViewAt",
  scheme: "file",
  textToInsert: `GetChildViewAt`,
  doc: getChildViewAtDoc,
  triggerWord: "Ge",
});

// RemoveChildView
const kotlinRemoveChildView = registerCompletionProvider({
  language: "kotlin",
  label: "RemoveChildView",
  scheme: "file",
  textToInsert: `RemoveChildView`,
  doc: removeChildViewDoc,
  triggerWord: "Re",
});

// RemoveChildViewAt
const kotlinRemoveChildViewAt = registerCompletionProvider({
  language: "kotlin",
  label: "RemoveChildViewAt",
  scheme: "file",
  textToInsert: `RemoveChildViewAt`,
  doc: removeChildViewAtDoc,
  triggerWord: "Re",
});

// OnCreate
const kotlinOnCreate = registerCompletionProvider({
  language: "kotlin",
  label: "OnCreate",
  scheme: "file",
  textToInsert: `OnCreate`,
  doc: onCreateDoc,
  triggerWord: "On",
});

// OnDestroy
const kotlinOnDestroy = registerCompletionProvider({
  language: "kotlin",
  label: "OnDestroy",
  scheme: "file",
  textToInsert: `OnDestroy`,
  doc: onDestroyDoc,
  triggerWord: "On",
});

// OnStartObserving
const kotlinOnStartObserving = registerCompletionProvider({
  language: "kotlin",
  label: "OnStartObserving",
  scheme: "file",
  textToInsert: `OnStartObserving`,
  doc: onStartObservingDoc,
  triggerWord: "On",
});

// OnStopObserving
const kotlinOnStopObserving = registerCompletionProvider({
  language: "kotlin",
  label: "OnStopObserving",
  scheme: "file",
  textToInsert: `OnStopObserving`,
  doc: onStopObservingDoc,
  triggerWord: "On",
});

// OnAppContextDestroys
const kotlinOnAppContextDestroys = registerCompletionProvider({
  language: "kotlin",
  label: "OnAppContextDestroys",
  scheme: "file",
  textToInsert: `OnAppContextDestroys`,
  doc: onAppContextDestroysDoc,
  triggerWord: "On",
});

// OnActivityEntersForeground
const kotlinOnActivityEntersForeground = registerCompletionProvider({
  language: "kotlin",
  label: "OnActivityEntersForeground",
  scheme: "file",
  textToInsert: `OnActivityEntersForeground`,
  doc: onActivityEntersForegroundDoc,
  triggerWord: "On",
});

// OnActivityEntersBackground
const kotlinOnActivityEntersBackground = registerCompletionProvider({
  language: "kotlin",
  label: "OnActivityEntersBackground",
  scheme: "file",
  textToInsert: `OnActivityEntersBackground`,
  doc: onActivityEntersBackgroundDoc,
  triggerWord: "On",
});

// OnActivityDestroys
const kotlinOnActivityDestroys = registerCompletionProvider({
  language: "kotlin",
  label: "OnActivityDestroys",
  scheme: "file",
  textToInsert: `OnActivityDestroys`,
  doc: onActivityDestroysDoc,
  triggerWord: "On",
});

export const kotlinProviders = [
  kotlinName,
  kotlinConstants,
  kotlinProperty,
  kotlinEvents,
  kotlinFun,
  kotlinAsyncFun,
  kotlinGroupView,
  kotlinAddChildView,
  kotlinGetChildCount,
  kotlinGetChildViewAt,
  kotlinRemoveChildView,
  kotlinRemoveChildViewAt,
  kotlinOnCreate,
  kotlinOnDestroy,
  kotlinOnStartObserving,
  kotlinOnStopObserving,
  kotlinOnAppContextDestroys,
  kotlinOnActivityEntersForeground,
  kotlinOnActivityEntersBackground,
  kotlinOnActivityDestroys,
];
