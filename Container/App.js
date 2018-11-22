/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import "../Config/ReactotronConfig";
import DebugConfig from "../Config/DebugConfig";
import React, { Component } from "react";
import RootContainer from "../Container/RootContainer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { algoliaFilter } from "../Redux/RootContainerRedux";

const store = createStore(combineReducers({ filter: algoliaFilter }));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
