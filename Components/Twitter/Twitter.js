import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, View, Alert, Linking } from "react-native";
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import s from './TwitterStyle'

export default class Twitter extends PureComponent {

    showDeepLinkAlert = (twitter) => {
        Alert.alert(
            'Leaving the app',
            `Are you sure you wanna open the twitter page ${twitter}?`,
            [
              {text: 'Cancel', style: 'cancel'},
              {text: 'OK', onPress: () => Linking.openURL(`https://twitter.com/${twitter}`)},
            ],
            { cancelable: true }
          )
    }

    render() {
        const { twitter } = this.props

        if (!twitter || twitter === '') return null
        return <TouchableOpacity onPress={() => this.showDeepLinkAlert(twitter)}>
            <View style={s.container}>
            <Text style={s.text}>
                - {twitter}
            </Text>
            <Icon name={'twitter'} type='entypo' size={16} color={'#00aced'}/>
            </View>
        </TouchableOpacity>
    }
}

Twitter.propTypes = {
    twitter: PropTypes.string
}