import React, { Component } from 'react';
import {
    View,
    Platform,
    SafeAreaView
} from 'react-native';

import { InstantSearch, Configure } from 'react-instantsearch/native'
import Conferences from '../Components/ConferenceList/ConferenceList'
import SearchBox from "../Components/SearchBox/SearchBox";
import LoadingIndicator from '../Components/LoadingIndicator/LoadingIndicator';

const TODAY = Math.round(new Date().getTime() / 1000);

export default class RootContainer extends Component {
    render() {
        return (
            <View>
                <SafeAreaView />
                <InstantSearch
                    appId="29FLVJV5X9"
                    apiKey="f2534ea79a28d8469f4e81d546297d39"
                    indexName="prod_conferences">
                    <Configure filters={`startDateUnix>${TODAY}`} hitsPerPage={15} />
                    <SearchBox />
                    <LoadingIndicator />
                    <Conferences />
                </InstantSearch>
            </View>)
    }
}