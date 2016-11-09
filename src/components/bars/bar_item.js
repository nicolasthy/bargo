import React, { Component } from 'react';

import axios from 'axios';

class BarItem extends Component {
  state = {
    place: null
  };

  componentWillMount() {
    const barDetails = [];

    var request = {
      placeId: this.props.bar.place_id
    };

    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails(request, this.getPlaceDetails.bind(this));
  }

  getPlaceDetails(place, status) {
    this.setState({ place });
  }

  renderPlacePhoto(place) {
    if(place.photos) {
      return <div
        className="bargo-place-thumb"
        style={{ backgroundImage: `url('${place.photos[0].getUrl({'maxWidth': 400, 'maxHeight': 400})}')` }} />
    }
  }

  renderPlace() {
    const place = this.state.place;
    const bar = this.props.bar;

    console.log(place);

    if(place) {
      return (
        <div className="card card-block">
          {this.renderPlacePhoto(place)}
          <img className="card-icon" src={place.icon} height="20px" width="20px" />
          <h4 className="card-title">{bar.name}</h4>
          <div>{place.vicinity}</div>
          <div>{place.formatted_phone_number}</div>
          <div>{place.rating} / 5</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ width: '100%' }}>{this.renderPlace()}</div>
    );
  }
}

export default BarItem;
