import React from 'react';
import {
  Text,
  View,
  Platform,
  SectionList
} from 'react-native';

import { filter, groupBy, sortBy as _sortBy } from 'lodash';
import format from 'date-fns/format/index';
import parse from 'date-fns/parse/index';
import { Divider, Header, Icon, Button } from "react-native-elements";
import { connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';
import s from './ConferenceListStyle'
import ConferenceItem from '../ConferenceItem/ConferenceItem'
import Analytics from 'appcenter-analytics';

export default connectInfiniteHits(({ hits, hasMore, refine }) => {

  connectStateResults(({ error }) => {
    if (error)
      throw error
  })

  const groupAndSortConferences = (conferences, sortBy = 'startDate') => {
    const confs = groupBy(conferences, (conf) =>
      format(conf[sortBy], 'YYYY-MM')
    );

    Object.keys(confs).map((year) => {
      confs[year] = _sortBy(confs[year], (conference) =>
        conference[sortBy]
      );
    });

    const out = Object.keys(confs).map((key) => {
      return Object.assign({}, { title: key, data: confs[key] })
    })

    return out;
  }

  const LoadMoreFooter = () => {

    const refineAndTrack = () => {
      refine()
      Analytics.trackEvent('Load more')
    }

    return hasMore ? <View style={s.loadMoreButtonContainer}>
      <Divider style={s.loadMoreButtonDivider} />
      <Button transparent color={'#53acfe'} title={'Load more confs...'} onPress={() => refineAndTrack()} />
    </View> : null
  };

  return hits.length > 0 &&
    <SectionList
      contentContainerStyle={{ paddingBottom: Platform.OS === 'ios' ? 110 + 64 : 110 }}
      sections={groupAndSortConferences(hits)}
      renderItem={({ item }) => (<ConferenceItem {...item} />)}
      keyExtractor={(item) => item.uuid}
      ListFooterComponent={<LoadMoreFooter />}
      renderSectionHeader={({ section: { title } }) => {
        const dates = title.split('-');
        const month = dates[1];
        const year = dates[0];
        return <View style={{ padding: 10, backgroundColor: 'grey' }}>
          <Text style={{ fontWeight: 'bold' }}>
            {format(parse(`2018/${month}/01`), 'MMMM')} - {year}
          </Text>
        </View>
      }}
    />
});