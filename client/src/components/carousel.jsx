import React, { Component } from "react";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="http://www.tourismmin.gov.lk/english/images/large/6.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
