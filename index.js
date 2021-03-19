/**
 * @format
 */
import React, { useState } from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from "react-redux";
import {store} from "./store/configureStore";

// const store = configureStore();

const Main = (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
