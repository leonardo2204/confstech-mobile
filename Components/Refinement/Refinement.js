import React from "react";
import { Text, View, FlatList } from "react-native";

import { connectRefinementList } from "react-instantsearch/connectors";
import { ListItem } from "react-native-elements";

export default connectRefinementList(({ refine, items }) => (
  <View>
    <Text>Countries</Text>
    <FlatList
      data={items}
      keyExtractor={(item, _index) => item.label}
      renderItem={({ item }) => {
        return (
          <ListItem 
          title={item.label}
          containerStyle={{backgroundColor: item.isRefined ? 'red' : 'white'}}
          onPress={() => refine(item.value)} badge={{ value: item.count, textStyle: { color: 'black' }, containerStyle: {backgroundColor: '#FFCA04'} }} />
        );
      }}
    />
  </View>
));
