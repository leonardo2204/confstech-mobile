import React, { PureComponent } from "react";
import { Text, View, FlatList } from "react-native";
import { connectRefinementList } from "react-instantsearch/connectors";
import { ListItem } from "react-native-elements";

const RefinementList = connectRefinementList(({ refine, items }) => (
  <FlatList
    data={items}
    keyExtractor={(item, _index) => item.label}
    renderItem={({ item }) => {
      return (
        <ListItem
          title={item.label}
          checkmark={item.isRefined}
          onPress={() => refine(item.value)}
          bottomDivider={true}
          badge={!item.isRefined ? {
            value: item.count,
            textStyle: { color: "black" },
            containerStyle: { backgroundColor: "#FFCA04" }
          } : null}
        />
      );
    }}
  />
));

export default class Refinement extends PureComponent {
  render() {
    return (
      <View>
        <RefinementList {...this.props} />
      </View>
    );
  }
}
