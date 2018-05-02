import React, { Component } from 'react';
import { Text } from "react-native";
import { formatDate, generateEventJSONLD } from './utils';

export default (startDate, endDate) => {
    return class extends Component {
        render(){
            return <Text>{ formatDate(startDate, endDate) } </Text>
        }
    }
}