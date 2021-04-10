import { Component } from "react";
import Review from '../reviews/Review'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react'

class Campground extends Component {
  state = { reviews: [] }

    componentDidMount () {
        const { campgroundId } = this.props.location.state
        axios.get(`/api/campgrounds/${campgroundId}/services`)
            .then( res => {
                this.setState({ services: res.data })
            })
            .catch( err => console.log(err))
    }

  
    render () {
    const { reviews } = this.state
    const { campgroundId, name, location, description, sites, price } = this.props.location.state
    return (
      <>
        <h1>{name}</h1>
        <p>Location: {location}</p>
        <p>Description: {description}</p>
        <p>Available Sites: {sites}</p>
        <p>Price: ${price}</p>
        {/* <Reviews reviewId={id} /> */} 
        <Header>Reviews</Header>
        { reviews.map( r =>
          <Review key={r.id} {...r} deleteReview={this.deleteReview} />
        )}
      </>
    );
  }
}
export default Campground;
