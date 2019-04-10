import React, { Component } from "react";
import { getTrip } from "../service/TripService";

class TripView extends Component {
  state = {
    trip: getTrip(1)
  };

  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="col">
            <h3 className="border p-3">{this.state.trip.name}</h3>
            <div className="border">
              <h4 className="p-3">Trip Details</h4>
              <p className="pl-4">Trip Owner : {this.state.trip.owner}</p>
              <p className="pl-4">Budget : {this.state.trip.budget}</p>
              <p className="pl-4">End Date : {this.state.trip.endDate}</p>
              <p className="pl-4">Gender : {this.state.trip.gender}</p>
              <p className="pl-4">Age : {this.state.trip.age}</p>
              <ul className="list-group list-group-flush mr-5 ml-1 mb-3">
                {this.state.trip.location.map(m => (
                  <li className="list-group-item">{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col">
            <img
              className="w-100"
              src={this.state.trip.image}
              alt={this.state.trip.name}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TripView;
