import React, { PureComponent } from 'react';
import { Text } from "react-native";
import PropTypes from 'prop-types'

export default class Location extends PureComponent {
    render() {
        const { city, country } = this.props
        return <Text {...this.props}> {(city && country) ? `${city}, ${country}` : country || city} </Text>
    }
}

Location.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
}