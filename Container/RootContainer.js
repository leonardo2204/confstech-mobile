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
        <SafeAreaView />
        <InstantSearch
          appId="29FLVJV5X9"
          apiKey="f2534ea79a28d8469f4e81d546297d39"
          indexName="prod_conferences"
          searchState={this.props.filter}
          onSearchStateChange={this.props.applyFilter}
        >
          <Configure filters={`startDateUnix>${TODAY}`} hitsPerPage={15} />
          <SearchBox />
          <CheckBox title="Filters" checked={this.props.hasFilter} onPress={() => this.props.toggleFilterModal() } />
          <LoadingIndicator />
          <Conferences />
          <VirtualRefinementList attribute={"country"} />
          <VirtualRefinementList attribute={"topics"} />
          <FilterOverlay />
        </InstantSearch>
      </View>
    );
  }
}

const VirtualRefinementList = connectRefinementList(() => null);

const mapDispatchToProps = dispatch => {
  return {
    applyFilter: filter => dispatch(applyFilter(filter)),
    toggleFilterModal: _ => dispatch(toggleFilterModal())
  };
};

const mapStateToProps = state => {
  return {
    filter: state.filter.filter,
    hasFilter: hasFilter(state.filter.filter),
  };
};

const hasFilter = filter => {
    return !!filter.refinementList.topics || !!filter.refinementList.country
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
