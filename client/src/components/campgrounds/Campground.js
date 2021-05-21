import { Component } from "react";
import Review from '../reviews/Review'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header, Button, Icon } from 'semantic-ui-react'
import Parks from '../parks/Parks'

class Campground extends Component {
  state = { reviews: [] };

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

    // updateCampground = (campgroundId, campground) => {
    //   axios.put(`/api/campground/${campgroundId}`, { campground })
    //     .then( res => {
    //       const campgrounds = this.state.campgrounds.map( c => {
    //         if (c.id === id)
    //           return res.data
    //         return c;
    //       });
    //       this.setState({ campgrounds })
    //     })
    // }

  
    render () {
    const { reviews } = this.state
    const { campgroundId, name, location, description, sites, price, updateCampground } = this.props.location.state
    return (
      <>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h3>Description: {description}</h3>
        <h4>Available Sites: {sites} </h4>
        <h4>Price: ${price}</h4>
        
        {/* <Reviews reviewId={id} /> */}
        <Header>Reviews</Header>
        { this.state.reviews ? this.renderReviews() : '...loading'}
        <Parks/>
      </>
    );
  }
}
export default Campground;
