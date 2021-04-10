import { Component } from "react";
import Review from '../reviews/Review'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react'

class Campground extends Component {
  state = { reviews: [] }

    componentDidMount () {
        const { campgroundId } = this.props.location.state
        axios.get(`/api/campgrounds/${campgroundId}/reviews`)
            .then( res => {
                this.setState({ reviews: res.data })
            })
            .catch( err => console.log(err))
    }

    renderReviews = () => {
      return this.state.reviews.map( review => <Review key={review.id} {...review} />)
    }

  
    render () {
    const { reviews } = this.state
    const { campgroundId, name, location, description, sites, price } = this.props.location.state
    return (
      <>
        <h1>{campgroundId}</h1>
        <h1>{name}</h1>
        <p>Location: {location}</p>
        <p>Description: {description}</p>
        <p>Available Sites: {sites}</p>
        <p>Price: ${price}</p>
        {/* <Reviews reviewId={id} /> */} 
        <Header>Reviews</Header>
        { this.state.reviews ? this.renderReviews() : '...loading'}
      </>
    );
  }
}
export default Campground;
