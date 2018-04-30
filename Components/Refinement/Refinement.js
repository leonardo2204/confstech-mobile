import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';

import { connectRefinementList } from 'react-instantsearch/connectors';

export default connectRefinementList(({ refine, items }) =>
  <FlatList
    data={items}
    horizontal={true}
    keyExtractor={(item, index) => item.label}
    renderItem={({ item }) => {
      return (
        <View style={{ height: 30 }}>
          <TouchableHighlight
            onPress={() => {
              refine(item.value);
            }}>
            <Text style={item.isRefined ? { fontWeight: 'bold' } : {}}>
              {item.label}
            </Text>
          </TouchableHighlight>
        </View>
      );
    }}
  />
);