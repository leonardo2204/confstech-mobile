import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Button
} from 'react-native';

import { Divider } from "react-native-elements";
import { connectInfiniteHits } from 'react-instantsearch/connectors';
import s from './ConferenceListStyle'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { formatDate } from '../DateRange/utils'
import DateRange from '../DateRange/DateRange'

export default connectInfiniteHits(({ hits, hasMore, refine }) => {
  const renderLoadMoreFooter = () => {
    return (hasMore &&
      <View style={s.loadMoreButtonContainer}>
        <Divider style={s.loadMoreButtonDivider}/>
        <Button title={'Load more...'} onPress={() => refine()}/>
      </View>
    )
  }

  return (
    <FlatList
      data={hits}
      keyExtractor={(item, index) => item.objectID}
      ListFooterComponent={renderLoadMoreFooter}
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
              <View style={s.iconedContainer}>
                <MaterialIcons name='event' color={'black'} size={20} />
                <Text> {formatDate(item.startDate, item.endDate)} </Text>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
});