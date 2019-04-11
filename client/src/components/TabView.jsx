import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import Information from './Trip/Information';
import Places from './Places';
import Summary from './Trip/Summary';
import Payment from './Payment';
import Login from './Login';

export default class TabView extends Component {
  render() {
    return (
      <div class="mt-5">
        <Tabs defaultActiveKey="tripInformation" id="uncontrolled-tab-example">
            <Tab eventKey="tripInformation" title="Trip Information">
                <Information />
            </Tab>
            <Tab eventKey="addTrip" title="Add Trip">
                <Places />
            </Tab>
            <Tab eventKey="tripSummary" title="Trip Summary" >
                <Summary />
            </Tab>
            <Tab eventKey="payment" title="Payment" >
                <Payment />
            </Tab>
        </Tabs>
      </div>
    )
  }
}
