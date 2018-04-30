import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import { connectInfiniteHits, connectRefinementList } from 'react-instantsearch/connectors';
import s from './ConferenceListStyle'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default connectInfiniteHits(({ hits, hasMore, refine }) => {
  const onEndReached = function () {
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
              <View style={s.iconedContainer}>
                <MaterialIcons name='location-on' color={'black'} size={20} />
                <Text>
                  {item.country}・{item.city}
                </Text>
              </View>
              <View style={s.iconedContainer}>
                <MaterialIcons name='lightbulb-outline' color={'black'} size={20} />
                <Text>
                  {item.topics}
                </Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
});