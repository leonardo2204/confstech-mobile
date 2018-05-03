import React from 'react';
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
import Location from '../Location/Location'
import Topics from '../Topics/Topics'
import Twitter from '../Twitter/Twitter';

export default connectInfiniteHits(({ hits, hasMore, refine }) => {
  const renderLoadMoreFooter = () => {
    return (hasMore &&
      <View style={s.loadMoreButtonContainer}>
        <Divider style={s.loadMoreButtonDivider} />
        <Button title={'Load more...'} onPress={() => refine()} />
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
                <Location country={item.country} city={item.city} />
              </View>
              <View style={s.iconedContainer}>
                <MaterialIcons name='lightbulb-outline' color={'black'} size={20} />
                <Topics topics={item.topics} />
                <Twitter twitter={item.twitter} />
              </View>
              <View style={s.iconedContainer}>
                <MaterialIcons name='event' color={'black'} size={20} />
                <DateRange startDate={item.startDate} endDate={item.endDate} />
              </View>
            </View>
          </View>
        );
      }}
    />
  );
});