import {
    connectSearchBox,
} from 'react-instantsearch/connectors';
// We need to add the TextInput to our import

import React from 'react';

import {
    TextInput,
} from 'react-native';

import { SearchBar } from "react-native-elements";

export default connectSearchBox(({ refine, currentRefinement }) => {

    const styles = {
        marginTop: 20,
    };

    return (
        <SearchBar
            containerStyle={styles}
            showLoading
            lightTheme
            onChangeText={text => refine(text)}
            value={currentRefinement}
            placeholder={'Search a conference'}
            clearButtonMode={'always'}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize={'none'}
        />
    );
});