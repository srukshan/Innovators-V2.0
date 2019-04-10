import React, { Component } from "react";
import { getTrips } from "../service/TripService";
import TripSummary from "./tripSummary";

class TripSummaryList extends Component {
  state = { trips: getTrips() };
  render() {
    return (
      <div className="content">
        {this.state.trips.map(m => (
          <TripSummary
            id={m.id}
            key={m.id}
            name={m.name}
            owner={m.owner}
            image={m.image}
            star={m.rating}
            endDate={m.endDate}
          />
        ))}
      </div>
    );
  }
}

export default TripSummaryList;
