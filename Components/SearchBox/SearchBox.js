import {
    connectSearchBox,
} from 'react-instantsearch/connectors';
// We need to add the TextInput to our import

import React from 'react';

import {
    TextInput,
    Platform
} from 'react-native';

import { SearchBar } from "react-native-elements";

export default connectSearchBox(({ refine, currentRefinement }) => {
    return (
        <SearchBar
            inputStyle={{backgroundColor:'white'}}
            containerStyle={{ backgroundColor: '#FFCA04', borderTopWidth: 0, borderBottomWidth: 0 }}
            onChangeText={refine}
            value={currentRefinement}
            placeholder={'Search a conference'}
            clearButtonMode={'always'}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize={'none'}
        />
    );
});