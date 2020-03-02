# espeo-create-react-native-app

## General Information

React Native Create Espeo App is a good starter option for your next React Native Project.
Starter application include:

- newest React Native
- typescript support
- react-intl integrated
- redux with 2 example middlewares configured: redux observable and redux saga
- rxjs included to work easily with Redux Observables
- support for 3 environments, there are Android flavors and IOS schemes prepared to read proper env variables. You env variables can be read using react-native-config library. There are schemes and flavors for (prod, stage, dev)
- husky to lint on git pre-commit
- prettier
- babel module resolver to use absolute paths inside project with @aliases
- eslint
- example bitrise CI configs for Android and IOS workflows - automatic build for Apple TestFlight and Android Play Store
- example axios interceptors
- styled components as a main styling method
- example components which use: https://newsapi.org/v2 to display list of news done with Redux, Axios, Styled Components.

## CLI

There are

### Install dependencies:

```bash
npm install
```

### Start metro bundler

```bash
npm start
```

### Run on ios emulator

```bash
npm run ios:dev
npm run ios:stage
npm run ios:prod
npm run release-ios:dev
npm run release-ios:stage
npm run release-ios:prod
```

Above command will open Ios emulator and run proper schemes, each scheme is linked with proper endfile: .env, .env.production, .env.staging. You can choose to run Debug mode or Release mode of your application.

```json
"ios:dev": "react-native run-ios --configuration Debug --scheme espeoCreateReactNativeApp-DEV",

"ios:stage": "react-native run-ios --configuration Debug --scheme espeoCreateReactNativeApp-STAGE",

"ios:prod": "react-native run-ios --configuration Debug --scheme espeoCreateReactNativeApp-PROD",

"release-ios:dev": "react-native run-ios --configuration Release --scheme espeoCreateReactNativeApp-DEV",

"release-ios:stage": "react-native run-ios --configuration Release --scheme espeoCreateReactNativeApp-STAGE",

"release-ios:prod": "react-native run-ios --configuration Release --scheme espeoCreateReactNativeApp-PROD",
```

### Release for IOS

Ad-hoc or Play Store releases should be done using Xcode. Open Xcode and click Product-> Archive.
If archiving will be successful Organizer window should appear, from where you will be able to distribute your app if all signing configs and provisioning profiles will be present.

### Run on android emulator emulator

Run on android emulator application debug mode with proper variants. Each variant can have own properties like different app name, signing rules etc. Please see android/app/build.gradle

```json
"android:dev": "ENVFILE=.env react-native run-android --variant=devDebug --appIdSuffix=dev",

"android:stage": "ENVFILE=.env.staging react-native run-android --variant=stageDebug --appIdSuffix=stage",

"android:prod": "ENVFILE=.env.production react-native run-android --variant=prodDebug --appIdSuffix=prod",
```

### Release for android

Above commends will generate APK file in local filesystem under android/app/build/outputs/apk
Ewach build will use different product flavor from build.gradle and also different ENVFILE.

```
"release-android:dev": "cd android && ENVFILE=.env ./gradlew assembleDevRelease",

"release-android:stage": "cd android && ENVFILE=.env.staging ./gradlew assembleStageRelease",

"release-android:prod": "cd android && ENVFILE=.env.production ./gradlew assembleProdRelease",
```

### Quality

Lint all files us

```
"lint": "eslint --config ./.eslintrc.json 'src/**/*.{ts,tsx}'"

```

## Bitrise

Bitrise is CI automation tool to automatically deploy apps to play store and apple testflight.

In /bitrise catalogs there are 2 yml files for android and ios workflows.

Boths should be uploaded to bitrise to have 2 separate workflows for each platform.

### IOS

Prooper code signing need to be uploaded to bitrise. In case of Ios: provisioning profiles and code signing certificates. First make sure your project is building fine on your local Xcode and you have all proper certificates:

- development certificate for you
- distribution certificate for your team
- provisioning profile for realeasing to app store

Then use: https://github.com/bitrise-io/codesigndoc to gather or certificates and provisoning profiles required by Apple. They should be automaticly uploaded to your bitrise account.

Setup secret Enviromental variables: APPLE_ID, APPLE_ID_PASSWORD, APPLE_APPLICATION_PASSWORD to be able to sucessfully deploy app to TestFlight

### Android

Upload your keystore to Code Signing tab in bitrise.

Setup Env variable pointing to env variable you want to use in application f.e. ENVFILE = .env.production

## Fastlane

### Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using

```
[sudo] gem install fastlane -NV
```

or alternatively using `brew cask install fastlane`

## Available Actions

### iOS

### ios release

```
fastlane ios release
```

Push a new release build to the App Store

### ios beta

```
fastlane ios beta
```

Push a new release build to TestFlight

### Android

### android alpha

```
fastlane android alpha
```

Submit alpha release to Google Play Store

### android beta

```
fastlane android beta
```

Submit beta release to Google Play Store

### android production

```
fastlane android production
```

Submit production release to Google Play Store

More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
