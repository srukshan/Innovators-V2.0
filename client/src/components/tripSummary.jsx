import React, { Component } from "react";
import {  Link } from "react-router-dom";

class TripSummary extends Component {
  state = {
    id: this.props.key,
    image: this.props.image,
    title: this.props.name,
    star: this.props.star,
    author: this.props.owner,
    endDate: this.props.endDate,
    viewUrl: this.props.viewUrl
  };

  getStars() {
    switch (this.state.star) {
      case 1:
        return (
          <div>
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
          </div>
        );
      case 2:
        return (
          <div>
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
          </div>
        );
      case 4:
        return (
          <div>
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
          </div>
        );
      case 5:
        return (
          <div>
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
            <img
              width="20"
              height="20"
              src="http://pngwebicons.com/uploads/star/ico/star_icon5425.ico"
            />
          </div>
        );
    }

    return <p>No Reviews</p>;
  }

  render() {
    return (
      <div className="row border p-3 m-3">
        <div className="col">
          <img
            className="w-100"
            src={this.state.image}
            alt={this.state.title}
          />
        </div>
        <div className="col-9">
          <h4>{this.state.title}</h4>
          {this.getStars()}
          <p>Cordinator : {this.state.author}</p>
          <p>Exp Date : {this.state.endDate}</p>
          <span className="">
            {/* <input
              type="button"
              className="btn btn-primary btn-sm float-right"
              href={"/trip?id=" + this.state.id}
              value="Visit"
            /> */}
            <button className="btn btn-sm float-right">
              <Link to="/trip">Visit</Link> 
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default TripSummary;
