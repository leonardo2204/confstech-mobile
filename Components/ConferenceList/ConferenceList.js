import React from 'react';
import {
  Text,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { Divider, Header, Icon, Button } from "react-native-elements";
import { connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';
import s from './ConferenceListStyle'
import ConferenceItem from '../ConferenceItem/ConferenceItem'

export default connectInfiniteHits(({ hits, hasMore, refine }) => {

  const LoadMoreFooter = connectStateResults(
    ({ searching }) =>
      !searching ? <View style={s.loadMoreButtonContainer}>
        <Divider style={s.loadMoreButtonDivider} />
        <Button transparent color={'#53acfe'} title={'Load more confs...'} onPress={() => refine()} />
      </View> : null
  );

  return (
    <FlatList
      data={hits}
      keyExtractor={(item, index) => item.objectID}
      ListFooterComponent={<LoadMoreFooter />}
      renderItem={({ item }) =>
        <ConferenceItem {...item} />
      }
    />
  );
});