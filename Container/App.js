/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import "../Config/ReactotronConfig";
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react';
import RootContainer from '../Container/RootContainer'
import codePush from 'react-native-code-push'

class App extends Component {
  render() {
    return <RootContainer />
  }
}

export default DebugConfig.useReactotron
  ? console.tron.overlay(codePush(App))
  : codePush(App)