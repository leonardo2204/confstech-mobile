import React from "react";
import { Overlay } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import Refinement from "../Refinement/Refinement";
import { connect } from "react-redux";
import { InstantSearch, Configure } from "react-instantsearch/native";
import { applyFilter, toggleFilterModal } from "../../Redux/RootContainerRedux";
import {
  connectRefinementList,
  connectStateResults
} from "react-instantsearch/connectors";

const TODAY = Math.round(new Date().getTime() / 1000);

class FilterOverlay extends React.PureComponent {
  render() {
    return (
      <Overlay
        isVisible={this.props.filterModalToggle}
        height="auto"
        onBackdropPress={() => this.props.toggleFilterModal()}
      >
        <InstantSearch
          appId="29FLVJV5X9"
          apiKey="f2534ea79a28d8469f4e81d546297d39"
          indexName="prod_conferences"
          searchState={this.props.filter}
          onSearchStateChange={this.props.applyFilter}
        >
          <Configure filters={`startDateUnix>${TODAY}`} hitsPerPage={15} />
          <LoadingIndicator />
          <Refinement attribute={this.props.attribute} />
          <VirtualRefinementList attribute={"country"} />
          <VirtualRefinementList attribute={"topics"} />
        </InstantSearch>
      </Overlay>
    );
  }
}

const getTitle = attribute => {
  return attribute === 'topics' ? 'Topics' : 'Countries'
}

const LoadingIndicator = connectStateResults(({ searching }) =>
  searching ? <ActivityIndicator size='large'/> : null
);

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
    attribute: state.filter.attribute,
    filterModalToggle: state.filter.isOpen
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterOverlay);
