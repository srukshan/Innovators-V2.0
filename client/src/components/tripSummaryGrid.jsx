import React, { Component } from "react";
import { getTrips } from "../service/TripService";
import TripSummaryG from "./tripSummaryG";

class TripSummaryGrid extends Component {
  state = { trips: getTrips() };
  render() {
    return (
      <div className="content">
        <div className="row">
          {this.state.trips.map(m => (
            <TripSummaryG
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
      </div>
    );
  }
}

export default TripSummaryGrid;
