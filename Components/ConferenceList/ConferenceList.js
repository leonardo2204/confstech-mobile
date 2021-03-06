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
import { connectInfiniteHits } from 'react-instantsearch/connectors';
import s from './ConferenceListStyle'
import ConferenceItem from '../ConferenceItem/ConferenceItem'

export default connectInfiniteHits(({ hits, hasMore, refine }) => {

  const groupAndSortConferences = (conferences, sortBy = 'startDate') => {
    const confs = groupBy(conferences, (conf) =>
      format(conf[sortBy], 'YYYY-MM')
    );

    Object.keys(confs).map((year) => {
      confs[year] = _sortBy(confs[year], (conference) =>
        conference[sortBy]
      );
    });

    return Object.keys(confs).map((key) => {
      return Object.assign({}, { title: key, data: confs[key] })
    })
  }

  const LoadMoreFooter = () => {
    return hasMore && <View style={s.loadMoreButtonContainer}>
      <Divider style={s.loadMoreButtonDivider} />
      <Button clear titleStyle={{color: '#53acfe'}} title={'Load more confs...'} onPress={() => refine()} />
    </View>
  };

  return hits.length > 0 &&
    <SectionList
      contentContainerStyle={{ paddingBottom: Platform.OS === 'ios' ? 110 + 90 : 110 }}
      sections={groupAndSortConferences(hits)}
      renderItem={({ item }) => (<ConferenceItem {...item} />)}
      keyExtractor={(item) => item.uuid}
      ListFooterComponent={<LoadMoreFooter />}
      renderSectionHeader={({ section: { title } }) => {
        const dates = title.split('-');
        const month = dates[1];
        const year = dates[0];
        return <View style={{ padding: 10, backgroundColor: '#FFCA04' }}>
          <Text style={{ fontWeight: 'bold' }}>
            {format(parse(`2018/${month}/01`), 'MMMM')} - {year}
          </Text>
        </View>
      }}
    />
});