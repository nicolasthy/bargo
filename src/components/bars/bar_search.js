import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Geosuggest from 'react-geosuggest';

import BeerSearch from '../beers/beer_search';

class BarSearch extends Component {
  componentWillMount() {
    this.props.fetchBeers();
  }

  getFilteredList(suggest = null) {
    let filteredList = [];
    if(suggest) {
      var filtered = this.props.bars.filter(function(bar) {
        return suggest.placeId == bar.place_id;
      });
      filteredList = filtered;
    }

    return filteredList;
  }

  onSuggestSelect(suggest) {
    console.log(suggest);
    console.log(this.props.bars);
    var filteredList = this.getFilteredList(suggest, null);
    this.props.filterList(filteredList, filteredList.length > 0);
  }

  onBlur(value) {
    if(value.length == 0) {
      this.props.filterList(this.props.bars, false);
    }
  }

  getSuggestLabel(suggest) {
    return suggest.structured_formatting.main_text;
  }

  render() {
    return(
      <div>
        <Geosuggest
          country="fr"
          types={["establishment"]}
          placeholder="Recherchez un endroit ..."
          onSuggestSelect={this.onSuggestSelect.bind(this)}
          onBlur={this.onBlur.bind(this)}
          getSuggestLabel={this.getSuggestLabel.bind(this)} />

        <BeerSearch beers={this.props.beers} bars={this.props.bars} filterList={this.props.filterList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { beers: state.beers };
}

export default connect(mapStateToProps, actions)(BarSearch);
