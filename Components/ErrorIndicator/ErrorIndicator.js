import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { connectStateResults } from 'react-instantsearch/connectors';
import styles from './ErrorIndicatorStyle'

export default ErrorIndicator = connectStateResults(
    ({ error }) =>
        error ? <View style={styles.errorContainer}>
            <TouchableOpacity activeOpacity={.8} onPress={() => this.props.onPress()}>
                <Card wrapperStyle={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>An error has ocurred</Text>
                    <Text style={styles.errorRetryText}>Tente Novamente</Text>
                </Card>
            </TouchableOpacity>
        </View> : null
);