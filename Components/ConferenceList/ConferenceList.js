import React from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { Divider, Header, Icon } from "react-native-elements";
import { connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';
import s from './ConferenceListStyle'
import ConferenceItem from '../ConferenceItem/ConferenceItem'
import ProgressBar from 'react-native-progress/Bar'

export default connectInfiniteHits(({ hits, hasMore, refine }) => {

  const LoadMoreFooter = connectStateResults(
    ({ searching }) =>
      !searching ? <View style={s.loadMoreButtonContainer}>
        <Divider style={s.loadMoreButtonDivider} />
        <Button title={'Load more confs...'} onPress={() => refine()} />
      </View> : null
  );

  const LoadingIndicator = connectStateResults(
    ({ searching }) =>
      searching ? <ProgressBar indeterminate width={null} borderWidth={0} color={'black'} height={3} /> : null
  );

  // const onEndReached = () => {
  //   if (hasMore) {
  //     refine();
  //   }
  // };

  return (
    <FlatList
      data={hits}
      keyExtractor={(item, index) => item.objectID}
      ListFooterComponent={<LoadMoreFooter />}
      ListHeaderComponent={<LoadingIndicator />}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) =>
        <ConferenceItem {...item} />
      }
    />
  );
});