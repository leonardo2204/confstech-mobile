import React, { Component } from 'react';
import {
    View,
    StatusBar,
} from 'react-native';

import { InstantSearch } from 'react-instantsearch/native'
import Conferences from '../Components/ConferenceList/ConferenceList'
import SearchBox from "../Components/SearchBox/SearchBox";
import s from './RootContainerStyle'
import Configure from 'react-instantsearch/src/widgets/Configure';

const CURRENT_YEAR = (new Date()).getYear() + 1900;
const TODAY = Math.round(new Date().getTime() / 1000);

export default class RootContainer extends Component {
    render() {
        return (
            <View style={s.container}>
                <StatusBar barStyle='light-content' />
                <InstantSearch
                    appId="29FLVJV5X9"
                    apiKey="f2534ea79a28d8469f4e81d546297d39"
                    indexName="prod_conferences">
                    <Configure filters={`startDateUnix>${TODAY}`} hitsPerPage={10} />
                    <Conferences />
                </InstantSearch>
            </View>)
    }
}