import React from 'react'
import ProgressBar from 'react-native-progress/Bar'
import { connectStateResults } from 'react-instantsearch/connectors';

export default LoadingIndicator = connectStateResults(
    ({ searching }) =>
      searching ? <ProgressBar indeterminate width={null} borderWidth={0} color={'black'} height={3} /> : null
  );