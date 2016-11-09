import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import BarSearch from './bar_search';
import BarItem from './bar_item';

class BarList extends Component {
  state = {
    filteredList: this.props.bars,
    isFiltered: false,
    error: false,
    lazy: true
  };

  componentWillMount() {
    this.props.fetchBars();
  }

  handleNewBar(e) {
    e.preventDefault();
    this.props.createBar(this.state.filterList);
    this.setState({
      filteredList: [],
      isFiltered: false,
      error: false
    });
  }

  filterList(array, status) {
    if(array[0].new) {
      this.setState({
        filterList: array[0].bar,
        isFiltered: status,
        error: true
      });
    } else {
      this.setState({
        filteredList: array,
        isFiltered: status,
        error: false
      });
    }
  }

  renderBar(bar, index) {
    if (this.state.lazy) {
      if(index < 7) {
        return <BarItem key={index} bar={bar} />;
      }
    } else {
      return (
        <div className="card card-block" key={bar.id}>
          <h4 className="card-title">{bar.name}</h4>
        </div>
      );
    }
  }

  renderMore() {
    this.setState({ lazy: false });
  }

  renderMoreAction() {
    if(this.state.lazy && Object.keys(this.props.bars).length > 7) {
      return (
        <a href="#loadMore" onClick={this.renderMore.bind(this)}>Load More...</a>
      );
    }
  }

  renderList() {
    // console.log(this.props.bars);
    if(!this.state.error) {
      return (
        <div className="bar-list">
          {this.state.isFiltered ? this.state.filteredList.map(this.renderBar.bind(this)) : this.props.bars.map(this.renderBar.bind(this))}
          {this.renderMoreAction()}
        </div>
      );
    }

    return (
      <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">Oups!</h4>
        <p>Ce bar ne figure pas dans notre liste, aidez-nous à la completer en <strong><a href="#add-to-list" className="alert-link" onClick={this.handleNewBar.bind(this)}>ajoutant ce bar</a></strong>!</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        <BarSearch bars={this.props.bars} filterList={this.filterList.bind(this)} />
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { bars: state.bars };
}

export default connect(mapStateToProps, actions)(BarList);
