import {
    connectSearchBox,
} from 'react-instantsearch/connectors';

import React from 'react';
import { SearchBar } from "react-native-elements";

import s from './SearchBoxStyle'

export default connectSearchBox(({ refine, currentRefinement }) => {
    return (
        <SearchBar
            style={{ position: 'absolute', zIndex: 1 }}
            inputStyle={s.inputStyle}
            containerStyle={s.containerStyle}
            onChangeText={refine}
            value={currentRefinement}
            placeholder={'Search by name, country or topics'}
            clearButtonMode={'always'}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize={'none'}
        />
    );
});