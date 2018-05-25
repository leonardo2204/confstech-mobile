import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Platform,
    Text
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

    constructor(props){
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err, info) {
        this.setState({hasError: true})
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor={'#FFCA04'} barStyle={'dark-content'} style={s.statusBar} />
                <View style={s.appBar} />
                <InstantSearch
                    appId="29FLVJV5X9"
                    apiKey="f2534ea79a28d8469f4e81d546297d39"
                    indexName="prod_conferences">
                    <Configure filters={`startDateUnix>${TODAY}`} hitsPerPage={15} />
                    <SearchBox />
                    <LoadingIndicator />
                    <ErrorIndicator />
                    {!this.state.hasError && <Conferences />}
                    {this.state.hasError && <Text>Error</Text>}
                </InstantSearch>
            </View>)
    }
}