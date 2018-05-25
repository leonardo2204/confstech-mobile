import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { connectStateResults } from 'react-instantsearch/connectors';
import styles from './ErrorIndicatorStyle'

export default ErrorIndicator = connectStateResults(
    class ErrorIndicator extends Component {
    error = null

    componentWillReceiveProps(nextProps) {
        if (this.error && !nextProps.error) {
          this.error = null
        }
        if (!this.error && nextProps.error) {
          // only throw on new errors
          throw nextProps.error
        }
      }

    render() {
        return null
    }
})