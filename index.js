

import {AppRegistry} from 'react-native';
import App from './src/pages/Base';
// import App from './src/pages/splash';
//  import App from './src/pages/hybrid/Anasayfa';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);