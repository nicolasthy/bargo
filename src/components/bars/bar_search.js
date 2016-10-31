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

      if(filteredList.length == 0) {
        let bar = {
          lat: suggest.location.lat,
          lon: suggest.location.lng,
          name: suggest.label,
          place_id: suggest.placeId
        };
        return [
          {
            new: true,
            bar: bar
          }
        ];
      }
    }

    return filteredList;
  }

  onSuggestSelect(suggest) {
    var filteredList = this.getFilteredList(suggest);
    this.props.filterList(filteredList, true);
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
