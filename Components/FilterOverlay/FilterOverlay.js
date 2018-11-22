import React from "react";
import { ScrollView } from "react-native";
import { Overlay } from "react-native-elements";
import Refinement from "../Refinement/Refinement";
import { connect } from "react-redux";
import { InstantSearch, Configure } from "react-instantsearch/native";
import { applyFilter, toggleFilterModal } from "../../Redux/RootContainerRedux"

const TODAY = Math.round(new Date().getTime() / 1000);

class FilterOverlay extends React.PureComponent {
  render() {
    return (
      <Overlay
        isVisible={this.props.filterModalToggle}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="grey"
        onBackdropPress={() => this.props.toggleFilterModal()}
      >
        <ScrollView>
          <InstantSearch
            appId="29FLVJV5X9"
            apiKey="f2534ea79a28d8469f4e81d546297d39"
            indexName="prod_conferences"
            searchState={this.props.filter}
            onSearchStateChange={this.props.applyFilter}
          >
          <Configure filters={`startDateUnix>${TODAY}`} hitsPerPage={15} />
            <Refinement attribute={"topics"} />
            <Refinement attribute={"country"} />
          </InstantSearch>
        </ScrollView>
      </Overlay>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        applyFilter: filter => dispatch(applyFilter(filter)),
        toggleFilterModal: _ => dispatch(toggleFilterModal())
    }
  }

const mapStateToProps = state => {
  return {
    filter: state.filter.filter,
    filterModalToggle: state.filter.isOpen,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterOverlay);
