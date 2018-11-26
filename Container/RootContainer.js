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
import { CheckBox } from "react-native-elements";

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
            <View style={{ flexDirection: "row", alignContent: "flex-end" }}>
              <CheckBox
                title="Topics"
                checked={this.props.hasFilterTopics}
                onPress={() => this.props.toggleFilterModal("topics")}
              />
              <CheckBox
                title="Country"
                checked={this.props.hasFilterCountry}
                onPress={() => this.props.toggleFilterModal("country")}
              />
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
  return !!filter.refinementList[attribute];
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
