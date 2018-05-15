import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Platform
} from 'react-native';

import { InstantSearch } from 'react-instantsearch/native'
import Conferences from '../Components/ConferenceList/ConferenceList'
import SearchBox from "../Components/SearchBox/SearchBox";
import LoadingIndicator from '../Components/LoadingIndicator/LoadingIndicator';
import ErrorIndicator from '../Components/ErrorIndicator/ErrorIndicator'
import s from './RootContainerStyle'
import Configure from 'react-instantsearch/src/widgets/Configure';
import { Header, Icon } from 'react-native-elements';

const CURRENT_YEAR = (new Date()).getYear() + 1900;
const TODAY = Math.round(new Date().getTime() / 1000);

export default class RootContainer extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor={'#FFCA04'} barStyle={'light-content'}/>
                {Platform.OS === 'ios' ? <View style={{height : 24, backgroundColor: '#FFCA04'}} /> : null}
                <InstantSearch
                    appId="29FLVJV5X9"
                    apiKey="f2534ea79a28d8469f4e81d546297d39"
                    indexName="prod_conferences">
                    <Configure filters={`startDateUnix>${TODAY}`} hitsPerPage={15} />
                    <SearchBox />
                    <LoadingIndicator />
                    <ErrorIndicator /> 
                    <Conferences />
                </InstantSearch>
            </View>)
    }
}