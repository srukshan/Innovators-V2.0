import React, { Component } from "react";
import Navigation from "./navigation";
import { Route, Switch } from "react-router-dom";
import Carousel from "./carousel";
import Test from "./test";
import Test2 from "./test2";
import TripSummaryList from './tripSummaryList';
import App from "../App";
import TripView from "./tripView";
import TabView from './TabView';
import AboutUS from "./aboutUs";
import Login from "./Login";
import TripSummaryGrid from "./tripSummaryGrid";


class Body extends Component {
  state = {
    path: ""
  };
  render() {
    return (

      <div>
         <Carousel />
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/tripList" component={TripSummaryList} />
            <Route path="/trip" component={TripView} />
            <Route path="/create-trip" component={TabView}></Route>
            <Route path="/aboutUs" component={AboutUS}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={TripSummaryGrid}></Route>
          </Switch>
        </div>

        
      </div>
      
    );
  }
}

export default Body;
