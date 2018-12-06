import React, { Component } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { InstantSearch, Configure } from "react-instantsearch/native";
import Conferences from "../Components/ConferenceList/ConferenceList";
import SearchBox from "../Components/SearchBox/SearchBox";
import LoadingIndicator from "../Components/LoadingIndicator/LoadingIndicator";
import FilterOverlay from "../Components/FilterOverlay/FilterOverlay";
import { connect } from "react-redux";
import { applyFilter, toggleFilterModal } from "../Redux/RootContainerRedux";
import { connectRefinementList } from "react-instantsearch/connectors";
import { CheckBox, Badge, Icon } from "react-native-elements";

const TODAY = Math.round(new Date().getTime() / 1000);

class RootContainer extends Component {
  render() {
    return (
      <View>
        <SafeAreaView>
          <InstantSearch
            appId="29FLVJV5X9"
            apiKey="f2534ea79a28d8469f4e81d546297d39"
            indexName="prod_conferences"
            searchState={this.props.filter}
            onSearchStateChange={this.props.applyFilter}
          >
            <Configure filters={`startDateUnix>${TODAY}`} hitsPerPage={15} />
            <SearchBox />
            <View
              style={{
                backgroundColor: "#FFDD5E",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10
              }}
            >
              
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  flex: 1
                }}
              >
                <CheckBox
                  title="Topics"
                  checked={this.props.hasFilterTopics > 0}
                  uncheckedIcon={
                    <Badge
                      value={0}
                      containerStyle={{ backgroundColor: "#FFCA04" }}
                      textStyle={{ color: "black" }}
                    />
                  }
                  containerStyle={{
                    backgroundColor: "#FFE998",
                    borderColor: "#FFE998"
                  }}
                  checkedIcon={
                    <Badge
                      value={this.props.hasFilterTopics}
                      containerStyle={{ backgroundColor: "#FFCA04" }}
                      textStyle={{ color: "black" }}
                    />
                  }
                  onPress={() => this.props.toggleFilterModal("topics")}
                />
                <CheckBox
                  title="Countries"
                  checked={this.props.hasFilterCountry > 0}
                  uncheckedIcon={
                    <Badge
                      value={0}
                      containerStyle={{ backgroundColor: "#FFCA04" }}
                      textStyle={{ color: "black" }}
                    />
                  }
                  containerStyle={{
                    backgroundColor: "#FFE998",
                    borderColor: "#FFE998"
                  }}
                  checkedIcon={
                    <Badge
                      value={this.props.hasFilterCountry}
                      containerStyle={{ backgroundColor: "#FFCA04" }}
                      textStyle={{ color: "black" }}
                    />
                  }
                  onPress={() => this.props.toggleFilterModal("country")}
                />
              </View>
            </View>
            <LoadingIndicator />
            <Conferences />
            <VirtualRefinementList attribute={"country"} />
            <VirtualRefinementList attribute={"topics"} />
            <FilterOverlay />
          </InstantSearch>
        </SafeAreaView>
      </View>
    );
  }
}

const VirtualRefinementList = connectRefinementList(() => null);

const mapDispatchToProps = dispatch => {
  return {
    applyFilter: filter => dispatch(applyFilter(filter)),
    toggleFilterModal: attribute => dispatch(toggleFilterModal(attribute))
  };
};

const mapStateToProps = state => {
  return {
    filter: state.filter.filter,
    hasFilterCountry: hasFilter(state.filter.filter, "country"),
    hasFilterTopics: hasFilter(state.filter.filter, "topics")
  };
};

const hasFilter = (filter, attribute) => {
  return (
    !!filter.refinementList[attribute] &&
    filter.refinementList[attribute].length
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
