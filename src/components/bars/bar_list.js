import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import BarSearch from './bar_search';

class BarList extends Component {
  state = {
    filteredList: this.props.bars,
    isFiltered: false
  };

  componentWillMount() {
    this.props.fetchBars();
  }

  filterList(array, status) {
    this.setState({
      filteredList: array,
      isFiltered: status
    })
  }

  renderBar(bar) {
    return (
      <div className="card card-block" key={bar.place_id}>
        <h4 className="card-title">{bar.label}</h4>
      </div>
    );
  }

  render() {
    return (
      <div>
        <BarSearch bars={this.props.bars} filterList={this.filterList.bind(this)} />
        <div className="bar-list">
          {this.state.isFiltered ? this.state.filteredList.map(this.renderBar) : this.props.bars.map(this.renderBar)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { bars: state.bars };
}

export default connect(mapStateToProps, actions)(BarList);
