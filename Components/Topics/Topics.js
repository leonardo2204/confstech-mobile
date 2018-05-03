import React, { PureComponent } from 'react';
import { Text } from "react-native";
import PropTypes from 'prop-types'

export default class Topics extends PureComponent {
    render(){
        const {topics} = this.props
        return <Text>{ topics.map((topic) => `#${topic}`).join(' ') } </Text>
    }
}

Topics.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.string).isRequired
}