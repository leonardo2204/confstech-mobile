import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import { connectInfiniteHits, connectRefinementList } from 'react-instantsearch/connectors';
import s from './ConferenceListStyle'

export default connectInfiniteHits(({ hits, hasMore, refine }) => {
    const onEndReached = function() {
      if (hasMore) {
        refine();
      }
    };
  
    return (
      <FlatList
        data={hits}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => item.objectID}
        renderItem={({ item }) => {
          return (
            <View style={s.container}>
              <View style={s.innerContainer}>
                <Text style={s.title}>
                  {item.name}
                </Text>
                <Text style={{marginLeft: 10}}>
                  {item.country}・{item.city}
                </Text>
                <Text style={{marginLeft: 10}}>
                  {item.topics}
                </Text>
              </View>
            </View>
          );
        }}
      />
    );
  });