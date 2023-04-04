/**
 * @format
 */

import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import LaundryApp from './src/index';

AppRegistry.registerComponent(appName, () => LaundryApp);
