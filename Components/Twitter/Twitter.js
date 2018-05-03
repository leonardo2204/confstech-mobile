import React, { PureComponent } from 'react';
import { Text } from "react-native";
import PropTypes from 'prop-types'

export default class Twitter extends PureComponent {
    render(){
        const {twitter} = this.props
        if(!twitter) return null
        return <Text> - { twitter } </Text>
    }
}

Twitter.propTypes = {
    twitter: PropTypes.string
}