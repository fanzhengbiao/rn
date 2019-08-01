/**
 * @format
 */
import react from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.log('fanzhengbiao webpack version',react.version);
AppRegistry.registerComponent(appName, () => App);
