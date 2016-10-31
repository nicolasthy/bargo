import {
  FETCH_BARS,
  FETCH_BEERS
} from './types';

export function fetchBars() {
  return {
    type: FETCH_BARS,
    payload: [
      {
        label: "Wallace Bar & Restaurant",
        lat: 45.7663386,
        lon: 4.828374599999961,
        place_id: "ChIJZ3_GNQDr9EcRkL9Bs6lU9IU",
        beers: [
          {
            id: 1,
            name: "Heineken"
          },
          {
            id: 2,
            name: "Paulaner"
          }
        ]
      },
      {
        label: "La Kolok",
        lat: 45.7464642,
        lon: 4.837563100000011,
        place_id: "ChIJH4Ad2kfq9EcR4IU8rOkkpO4",
        beers: [
          {
            id: 1,
            name: "Heineken"
          }
        ]
      }
    ]
  };
}

export function fetchBeers() {
  return {
    type: FETCH_BEERS,
    payload: [
      {
        id: 1,
        name: "Heineken"
      },
      {
        id: 2,
        name: "Paulaner"
      }
    ]
  };
}
