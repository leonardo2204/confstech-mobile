import React from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  Platform,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { Divider, Header, Icon } from "react-native-elements";
import { connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';
import s from './ConferenceListStyle'
import ConferenceItem from '../ConferenceItem/ConferenceItem'

export default connectInfiniteHits(({ hits, hasMore, refine }) => {
  const renderLoadMoreFooter = () => {
    return (hasMore &&
      <View style={s.loadMoreButtonContainer}>
        <Divider style={s.loadMoreButtonDivider} />
        <MoreResultsFooter />
      </View>
    )
  }

  const MoreResultsFooter = connectStateResults(
    ({ searching }) =>
      searching ? <ActivityIndicator size={'large'} color={'black'} /> : <Button title={'Load more confs...'} onPress={() => refine()} />
  );

  return (
    <FlatList
      data={hits}
      keyExtractor={(item, index) => item.objectID}
      ListFooterComponent={renderLoadMoreFooter}
      ListHeaderComponent={<Header
        outerContainerStyles={{ height: Platform.OS === 'ios' ? 70 : 70 - 24 }}
        centerComponent={<Text style={{ color: 'white' }}>Confs.tech</Text>}
      //rightComponent={<TouchableOpacity><Icon color={'white'} name={'filter-list'} /></TouchableOpacity>} 
      />}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) =>
        <ConferenceItem {...item} />
      }
    />
  );
});