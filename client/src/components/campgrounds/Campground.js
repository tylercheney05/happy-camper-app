import { Component } from "react";
import Review from '../reviews/Review'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header, Button, Icon, Container, Segment } from 'semantic-ui-react'
import Parks from '../parks/Parks'

const Campground = ({ location }) => {
  // state = { reviews: [] };

    // componentDidMount () {
    //     const { campgroundId } = this.props.location.state
    //     axios.get(`/api/campgrounds/${campgroundId}/reviews`)
    //         .then( res => {
    //             this.setState({ reviews: res.data })
    //         })
    //         .catch( err => console.log(err))
    // }

    // renderReviews = () => {
    //   return this.state.reviews.map( review => <Review key={review.id} {...review} />)
    // }

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

    // const { reviews } = this.state
    // const { campgroundId, name, location, description, sites, price, updateCampground } = this.props.location.state
    return (
      <Container>
        <h1 style={{textAlign: 'center'}}>{location.state.name}</h1>
        <h5 style={{textAlign: 'center'}}>{location.state.addresses[0].city}, {location.state.addresses[0].stateCode}</h5>
        <Segment>
          <h3>Description</h3>
          <p>{location.state.desc}</p>
        </Segment>
        <Segment>
          <h3>Amenities</h3>
          <h4>Toilets</h4>
          <p>{location.state.amenities.toilets[0]}</p>
          <h4>Showers</h4>
          <p>{location.state.amenities.showers[0]}</p>
          <h4>Potable Water</h4>
          <p>{location.state.amenities.potableWater[0]}</p>
          <h4>Laundry</h4>
          <p>{location.state.amenities.laundry}</p>
        </Segment>
        <h4>Available Sites: {location.state.sites} </h4>
        <h4>Price: ${location.state.price}</h4>
        
        {/* <Reviews reviewId={id} /> */}
        {/* <Header>Reviews</Header>
        { this.state.reviews ? this.renderReviews() : '...loading'} */}
        <Parks/>
      </Container>
    )
  }

export default Campground;
