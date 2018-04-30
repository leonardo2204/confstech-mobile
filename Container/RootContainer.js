import React, { Component } from 'react';
import {
    View,
    StatusBar,
} from 'react-native';

import { InstantSearch } from 'react-instantsearch/native'
import Conferences from '../Components/ConferenceList/ConferenceList'
import s from './RootContainerStyle'

export default class RootContainer extends Component {
    render() {
        return (
            <View style={s.container}>
                <StatusBar barStyle='light-content' />
                <InstantSearch
                    appId="29FLVJV5X9"
                    apiKey="f2534ea79a28d8469f4e81d546297d39"
                    indexName="prod_conferences">
                    <Conferences />
                </InstantSearch>
            </View>)
    }
}