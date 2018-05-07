import React, { Component } from 'react';
import { View } from 'react-native'
import Refinement from "../../Components/Refinement/Refinement";
import { InstantSearch } from 'react-instantsearch/native';

import s from './FilterContainerStyle'

export default class FilterContainer extends Component {
    render() {
        return (
            <InstantSearch
                appId="29FLVJV5X9"
                apiKey="f2534ea79a28d8469f4e81d546297d39"
                indexName="prod_conferences">
                <View styles={s.container}>
                    <Refinement attribute={'topics'} />
                </View>
            </InstantSearch>)
    }
}