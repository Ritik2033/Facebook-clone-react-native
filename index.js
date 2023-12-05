/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App'; // Corrected import statement
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);