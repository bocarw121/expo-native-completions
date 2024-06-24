# Expo Native Completions

This Visual Studio Code extension provides auto-completion for native modules and functions in Kotlin and Swift for Expo projects. The extension is designed to enhance developer productivity by offering quick and accurate completions along with inline documentation.

## Features

- **Auto-Completion**: Provides code suggestions for Kotlin and Swift functions, properties, constants, events, and lifecycle methods with more to come
- **Inline Documentation**: Displays relevant documentation for each completion to help you understand the usage without leaving the editor.

## Installation

1. **Prerequisites**:
   - Visual Studio Code installed on your machine.
   - A project using Expo with native Kotlin and/or Swift code.

2. **Installation**:
   - Clone this repository to your local machine.
   - Open the repository in Visual Studio Code.
   - Run `npm install` to install necessary dependencies.
   - Run the `vsce package` command to create a VSIX package.
   - Install the generated VSIX package in Visual Studio Code via the Extensions view (`View -> Extensions` -> `...` -> `Install from VSIX...`).

## Usage

1. **Enable the Extension**:
   - Ensure your project is an Expo project.
   - The extension will activate automatically when you open a Kotlin or Swift file in an Expo project.

2. **Auto-Completion**:
   - Start typing a trigger word (e.g., `Fu` for Function, `As` for AsyncFunction) to see suggestions.
   - Select a suggestion to insert the completion into your code.

3. **Inline Documentation**:
   - Hover over a completion item to see detailed documentation.
   - The documentation will stay visible as long as you hover over the item.

## Available Completions

**Note**: The extension includes completions that are available on specific platforms and across both Kotlin and Swift:

- **Function**
  - **Trigger Word**: `Fu`
  - **Documentation**: Defines a synchronous function.
- **AsyncFunction**
  - **Trigger Word**: `As`
  - **Documentation**: Defines an asynchronous function returning a Promise.
- **Name**
  - **Trigger Word**: `Na`
  - **Documentation**: Sets the module name used in JavaScript.
- **Constants**
  - **Trigger Word**: `Co`
  - **Documentation**: Sets constant properties on the module.
- **Property**
  - **Trigger Word**: `Pr`
  - **Documentation**: Defines a property on the JavaScript object.
- **Events**
  - **Trigger Word**: `Ev`
  - **Documentation**: Defines event names for the module.
- **Lifecycle Methods**:
  - **Trigger Words**:
    - `onCreate` (`onCreateDoc`)
    - `onDestroy` (`onDestroyDoc`)
    - `onStartObserving` (`onStartObservingDoc`)
    - `onStopObserving` (`onStopObservingDoc`)
    - `onAppContextDestroys` (`onAppContextDestroysDoc`)
    - `onAppEntersForeground` (`onAppEntersForegroundDoc`)
    - `onAppEntersBackground` (`onAppEntersBackgroundDoc`)
    - `onAppBecomesActive` (`onAppBecomesActiveDoc`)
    - `onActivityEntersForeground` (`onActivityEntersForegroundDoc`)
    - `onActivityEntersBackground` (`onActivityEntersBackgroundDoc`)
    - `onActivityDestroys` (`onActivityDestroysDoc`)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

### Steps to Contribute

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/bocarw121/expo-native-completions/blob/main/LICENCE) file for details.


