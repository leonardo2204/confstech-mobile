import React, { PureComponent } from 'react';
import { Text } from "react-native";
import { formatDate } from './utils';
import PropTypes from 'prop-types'

export default class DateRange extends PureComponent {
    render() {
        const {startDate, endDate} = this.props
        return <Text>{formatDate(startDate, endDate)} </Text>
    }
}

DateRange.propTypes = {
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
}