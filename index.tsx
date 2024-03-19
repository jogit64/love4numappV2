import { AppRegistry } from "react-native";
import App from "./App";
import appConfig from "./app.config.js"; // Importe tout le fichier de configuration

const appName = appConfig.expo.name; // Accède à la propriété name

AppRegistry.registerComponent(appName, () => App);
