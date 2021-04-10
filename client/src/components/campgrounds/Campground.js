import { Component } from "react";

class Campground extends Component {
  render() {
    const { campgroundId, name, location, description, sites, price } = this.props.location.state;
    return (
      <>
        <h1>{name}</h1>
        <p>Location: {location}</p>
        <p>Description: {description}</p>
        <p>Available Sites: {sites}</p>
        <p>Price: ${price}</p>
        {/* <Reviews reviewId={id} /> */}
        {/* <Reviews/> */}
      </>
    );
  }
}
export default Campground;
