import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';

import { connectRefinementList } from 'react-instantsearch/connectors';
import { Badge, ListItem } from 'react-native-elements';

export default connectRefinementList(({ refine, items }) =>
  <FlatList
    data={items}
    keyExtractor={(item, index) => item.label}
    renderItem={({ item }) => {
      console.log(item)
      return (
        <ListItem 
        title={item.label}
        />
      );
    }}
  />
);