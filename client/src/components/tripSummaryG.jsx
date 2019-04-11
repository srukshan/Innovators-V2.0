import React, { Component } from "react";

class TripSummaryG extends Component {
  state = {
    id: this.props.key,
    image: this.props.image,
    title: this.props.name,
    star: this.props.star,
    author: this.props.owner,
    endDate: this.props.endDate,
    viewUrl: this.props.viewUrl
  };

  render() {
    return (
      <div className="col">
        <img className="w-100" src={this.state.image} alt={this.state.title} />
        <h4 className="text-center">{this.state.title}</h4>
      </div>
    );
  }
}

export default TripSummaryG;
