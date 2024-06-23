export const nameDoc = `
### [Name](https://docs.expo.dev/modules/module-api/#name)

Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument. This can be inferred from the module's class name, but it's recommended to set it explicitly for clarity.

\`\`\`swift
Name("MyModuleName")
\`\`\`

\`\`\`kotlin
Name("MyModuleName")
\`\`\`
`;

export const constantsDoc = `
### [Constants](https://docs.expo.dev/modules/module-api/#constants)

Sets constant properties on the module. Can take a dictionary or a closure that returns a dictionary.


\`\`\`swift
// Created from the dictionary
Constants([
  "PI": Double.pi
])

// or returned by the closure
Constants {
  return [
    "PI": Double.pi
  ]
}
\`\`\`

\`\`\`kotlin
// Passed as arguments
Constants(
  "PI" to kotlin.math.PI
)

// or returned by the closure
Constants {
  return@Constants mapOf(
    "PI" to kotlin.math.PI
  )
}
\`\`\`
`;

export const functionDoc = `### [Function](https://docs.expo.dev/modules/module-api/#function)

Defines a native synchronous function that will be exported to JavaScript. Synchronous means that when the function is executed in JavaScript, its native code is run on the same thread and blocks further execution of the script until the native function returns.

#### [Arguments](https://docs.expo.dev/modules/module-api/#arguments)

- **name**: \`String\` — Name of the function that you'll call from JavaScript.
- **body**: \`(args...) => ReturnType\` — The closure to run when the function is called.

The function can receive up to 8 arguments. This is due to the limitations of generics in both Swift and Kotlin because this component must be implemented separately for each arity.

See the [Argument types](https://docs.expo.dev/modules/module-api/#argument-types) section for more details on what types can be used in the function body.



\`\`\`Swift
Function("syncFunction") { (message: String) in
  return message
}
\`\`\`



\`\`\`Kotlin
Function("syncFunction") { message: String ->
  return@Function message
}
\`\`\`
`;

export const asyncFunctionDoc = `
### [AsyncFunction](https://docs.expo.dev/modules/module-api/#asyncfunction)

Defines a JavaScript function that always returns a \`Promise\` and whose native code is by default dispatched on a different thread than the JavaScript runtime runs on.

#### [Arguments](https://docs.expo.dev/modules/module-api/#arguments-1)

- **name**: \`String\` — Name of the function that you'll call from JavaScript.
- **body**: \`(args...) -> ReturnType\` — The closure to run when the function is called.

If the type of the last argument is \`Promise\`, the function will wait for the promise to be resolved or rejected before the response is passed back to JavaScript. Otherwise, the function is immediately resolved with the returned value or rejected if it throws an exception. The function can receive up to 8 arguments (including the promise).

See the [Argument types](https://docs.expo.dev/modules/module-api/#argument-types) section for more details on what types can be used in the function body.

It is recommended to use \`AsyncFunction\` over \`Function\` when it:
- does I/O bound tasks such as sending network requests or interacting with the file system
- needs to be run on a different thread, for example, the main UI thread for UI-related tasks
- is an extensive or long-lasting operation that would block the JavaScript thread which in turn would reduce the responsiveness of the application

\`\`\`swift
AsyncFunction("asyncFunction") { (message: String) in
  return message
}

// or

// Make sure to import \`Promise\` class from \`expo.modules.kotlin\` instead of \`expo.modules.core\`.
AsyncFunction("asyncFunction") { (message: String, promise: Promise) in
  promise.resolve(message)
}
\`\`\`



\`\`\`kotlin
AsyncFunction("asyncFunction") { message: String ->
  return@AsyncFunction message
}

// or

AsyncFunction("asyncFunction") { message: String, promise: Promise ->
  promise.resolve(message)
}
\`\`\`
`;

export const coroutineFunctionDoc = `Kotlin coroutines only android`;

export const eventsDoc = `Events
Defines event names that the module can send to JavaScript.

Note: This component can be used inside of the View block to define callback names. See [View callbacks](https://docs.expo.dev/modules/module-api/#view-callbacks)


\`\`\`swift
Events("onCameraReady", "onPictureSaved", "onBarCodeScanned")
\`\`\`

\`\`\`kotlin
Events("onCameraReady", "onPictureSaved", "onBarCodeScanned")
\`\`\`

See [Sending events](https://docs.expo.dev/modules/module-api/#sending-events) to learn how to send events from the native code to JavaScript/TypeScript.
`;

export const propertyDoc = `Defines a new property directly on the JavaScript object that represents a native module. It is the same as calling [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) on the module object.

To declare a read-only property, you can use a shorthanded syntax that requires two arguments:

- **name**: \`String\` — Name of the property that you'll use from JavaScript.
- **getter**: \`() => PropertyType\` — The closure to run when the getter for a property was called.


\`\`\`swift
Property("foo") {
  return "bar"
}
\`\`\`

\`\`\`kotlin
Property("foo") {
  return@Property "bar"
}
In the case of the mutable property, both the getter and the setter closure are needed (using the syntax below is also possible to declare a property with only a setter):

- **name**: \`String\` — Name of the property that you'll use from JavaScript.
- **getter**: \`() => PropertyType\` — The closure to run when the getter for a property was called.
- **setter**: \`(newValue: PropertyType) => void\` — The closure to run when the setter for a property was called.

Example:

\`\`\`javascript
const foo = {
  _value: 'bar',
  get value() {
    return this._value;
  },
  set value(newValue) {
    // do something with new value
    this._value = newValue;
  },
};
\`\`\`

`;

export const onCreateDoc = `Defines module's lifecycle listener that is called right after module initialization. If you need to set up something when the module gets initialized, use this instead of module's class initializer.
`;
export const onDestroyDoc = `Defines module's lifecycle listener that is called when the module is about to be deallocated. Use it instead of module's class destructor.

`;
export const onStartObservingDoc = `Defines the function that is invoked when the first event listener is added.
`;
export const onStopObservingDoc = `Defines the function that is invoked when all event listeners are removed.
`;
export const onAppContextDestroysDoc = `Defines module's lifecycle listener that is called when the app context owning the module is about to be deallocated.`;

// TODO: Note swift only
export const onAppEntersForegroundDoc = `iOS only

### [\`OnAppEntersForeground\`](https://docs.expo.dev/modules/module-api/#onappentersforeground)

Defines the listener that is called when the app is about to enter the foreground mode.

> **Note** This function is not available on Android — you may want to use [\`OnActivityEntersForeground\`](https://docs.expo.dev/modules/module-api/#onactivityentersforeground) instead.
`;

console.log(onAppEntersForegroundDoc);

// TODO: Note swift only
export const onAppEntersBackgroundDoc = `iOS only

### [\`OnAppEntersBackground\`](https://docs.expo.dev/modules/module-api/#onappentersbackground)

Defines the listener that is called when the app enters the background mode.

> **Note** This function is not available on Android — you may want to use [\`OnActivityEntersBackground\`](https://docs.expo.dev/modules/module-api/#onactivityentersbackground) instead.
`;

// TODO: Note swift only
export const onAppBecomesActiveDoc = `iOS only

### [\`OnAppBecomesActive\`](https://docs.expo.dev/modules/module-api/#onappbecomesactive)

Defines the listener that is called when the app becomes active again (after \`OnAppEntersForeground\`).

> **Note** This function is not available on Android — you may want to use [\`OnActivityEntersForeground\`](https://docs.expo.dev/modules/module-api/#onactivityentersforeground) instead.
`;

// TODO: Note android only
export const onActivityEntersForegroundDoc = `Android only

### [\`OnActivityEntersForeground\`](https://docs.expo.dev/modules/module-api/#onactivityentersforeground)

Defines the activity lifecycle listener that is called right after the activity is resumed.

> **Note** This function is not available on iOS — you may want to use [\`OnAppEntersForeground\`](https://docs.expo.dev/modules/module-api/#onappentersforeground) instead.
`;

// TODO: Note android only
export const onActivityEntersBackgroundDoc = `Android only
### [\`OnActivityEntersBackground\`](https://docs.expo.dev/modules/module-api/#onactivityentersbackground)

Defines the activity lifecycle listener that is called right after the activity is paused.

> **Note** This function is not available on iOS — you may want to use [\`OnAppEntersBackground\`](https://docs.expo.dev/modules/module-api/#onappentersbackground) instead.
`;
// TODO: Note android only
export const onActivityDestroysDoc = ` Android only
### [\`OnActivityDestroys\`](https://docs.expo.dev/modules/module-api/#onactivitydestroys)

Defines the activity lifecycle listener that is called when the activity owning the JavaScript context is about to be destroyed.

> **Note** This function is not available on iOS — you may want to use [\`OnAppEntersBackground\`](https://docs.expo.dev/modules/module-api/#onappentersbackground) instead.
`;

// TODO: Note android only
export const groupViewDoc = `Android only
### [\`GroupView\`](https://docs.expo.dev/modules/module-api/#groupview)

Enables the view to be used as a view group. Definition components that are accepted as part of the group view definition: [\`AddChildView\`](https://docs.expo.dev/modules/module-api/#addchildview), [\`GetChildCount\`](https://docs.expo.dev/modules/module-api/#getchildcount), [\`GetChildViewAt\`](https://docs.expo.dev/modules/module-api/#getchildviewat), [\`RemoveChildView\`](https://docs.expo.dev/modules/module-api/#removechildview), [\`RemoveChildViewAt\`](https://docs.expo.dev/modules/module-api/#removechildviewat).

#### [Arguments](https://docs.expo.dev/modules/module-api/#arguments-4)

- **viewType** — The class of the native view. Note that the provided class must inherit from the Android \`ViewGroup\`.
- **definition**: \`() -> ViewGroupDefinition\` — A builder of the view group definition.

This property can only be used within a [\`View\`](https://docs.expo.dev/modules/module-api/#view) closure.



\`\`\`kotlin
GroupView<ViewGroup> {
  AddChildView { parent, child, index -> ... }
}
\`\`\`
`;
// TODO: Note android only
export const addChildViewDoc = `Android only
### [\`AddChildView\`](https://docs.expo.dev/modules/module-api/#addchildview)

Defines action that adds a child view to the view group.

#### [Arguments](https://docs.expo.dev/modules/module-api/#arguments-5)

- **action**: \`(parent: ParentType, child: ChildType, index: Int) -> ()\` — An action that adds a child view to the view group.

This property can only be used within a [\`GroupView\`](https://docs.expo.dev/modules/module-api/#groupview) closure.



\`\`\`kotlin
AddChildView { parent, child: View, index ->
  parent.addView(child, index)
}
\`\`\`
`;

// TODO: Note android only
export const getChildCountDoc = `Android only
### [\`GetChildCount\`](https://docs.expo.dev/modules/module-api/#getchildcount)

Defines action the retrieves the number of child views in the view group.

#### [Arguments](https://docs.expo.dev/modules/module-api/#arguments-6)

- **action**: \`(parent: ParentType) -> Int\` — A function that returns number of child views.

This property can only be used within a [\`GroupView\`](https://docs.expo.dev/modules/module-api/#groupview) closure.



\`\`\`kotlin
GetChildCount { parent ->
  return@GetChildCount parent.childCount
}
\`\`\`
`;
// TODO: Note android only
export const getChildViewAtDoc = ` Android only
### [\`GetChildViewAt\`](https://docs.expo.dev/modules/module-api/#getchildviewat)

Defines action that retrieves a child view at a specific index from the view group.

#### [Arguments](https://docs.expo.dev/modules/module-api/#arguments-7)

- **action**: \`(parent: ParentType, index: Int) -> ChildType\` — A function that retrieves a child view at a specific index from the view group.

This property can only be used within a [\`GroupView\`](https://docs.expo.dev/modules/module-api/#groupview) closure.



\`\`\`kotlin
GetChildViewAt { parent, index ->
  parent.getChildAt(index)
}
\`\`\`
`;
// TODO: Note android only
export const removeChildViewDoc = `Android only
### [\`RemoveChildView\`](https://docs.expo.dev/modules/module-api/#removechildview)

Defines action that removes a specific child view from the view group.

#### [Arguments](https://docs.expo.dev/modules/module-api/#arguments-8)

- **action**: \`(parent: ParentType, child: ChildType) -> ()\` — A function that remove a specific child view from the view group.

This property can only be used within a [\`GroupView\`](https://docs.expo.dev/modules/module-api/#groupview) closure.



\`\`\`Kotlin
RemoveChildView { parent, child: View ->
  parent.removeView(child)
}
\`\`\`
`;

// TODO: Note android only
export const removeChildViewAtDoc = `Android only
### [\`RemoveChildViewAt\`](https://docs.expo.dev/modules/module-api/#removechildviewat)

Defines action that removes a child view at a specific index from the view group.

#### [Arguments](https://docs.expo.dev/modules/module-api/#arguments-9)

- **action**: \`(parent: ParentType, index: Int) -> ()\` — A function that removes a child view at a specific index from the view group.

This property can only be used within a [\`GroupView\`](https://docs.expo.dev/modules/module-api/#groupview) closure.



\`\`\`kotlin
RemoveChildViewAt { parent, index ->
  parent.removeViewAt(index)
}
\`\`\`
`;
