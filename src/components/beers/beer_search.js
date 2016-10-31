import React, { Component } from 'react';

class BeerSearch extends Component {
  state = {
    checkedList: []
  };

  getFilteredList(e) {
    let checkedList = this.state.checkedList;

    if(checkedList.includes(parseInt(e.target.value))) {
      let index = checkedList.indexOf(parseInt(e.target.value));
      if(index > -1) {
        checkedList.splice(index, 1);
      }

      this.setState({checkedList});

      console.log(this.state.checkedList);
      return false;
    }

    checkedList.push(parseInt(e.target.value));
    this.setState({checkedList});

    console.log(this.state.checkedList);
  }

  renderBeer(beer) {
    return (
      <div className="form-check" key={beer.id}>
        <label className="form-check-label">
          <input type="checkbox" value={beer.id} className="form-check-input" onClick={this.getFilteredList.bind(this)} />
          {beer.name}
        </label>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.props.beers.map(this.renderBeer.bind(this))}
      </div>
    );
  }
}

export default BeerSearch;
