import React, { Component } from 'react';
import { Text } from "react-native";
import { formatDate, generateEventJSONLD } from './utils';
import PropTypes from 'prop-types'

export default class DateRange extends Component {
    render() {
        const {startDate, endDate} = this.props
        return <Text>{formatDate(startDate, endDate)} </Text>
    }
}

DateRange.propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,       
}