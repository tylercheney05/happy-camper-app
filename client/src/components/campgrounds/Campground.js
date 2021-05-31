import { Component } from "react";
import Review from '../reviews/Review'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header, Button, Icon, Container, Segment, Image } from 'semantic-ui-react'
import Parks from '../parks/Parks'
import { Link } from 'react-router-dom'

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

    const renderFees = () => {
      return location.state.fees.map( fee => (
        <>
          <h4>{fee.title}</h4>
          <p>{fee.description}</p>
          <p>${fee.cost}</p>
          { location.state.numberOfSitesReservable > 0 ?
            <Link to={{
              pathname: `/reservations/${location.state.campgroundId}/new`,
              state: {
                title: fee.title,
                price: fee.cost,
                name: location.state.name
              }
            }}>
              <Button style={{verticalAlign: 'bottom'}}>Make a Reservation</Button>
            </Link>
            : ''
          }
          <hr/>
        </>
      ))
    }

    const renderImages = () => {
      return location.state.images.map( image => (
        <Image src={image.url}/>
      ))
    }
    return (
      <Container>
        <div style={{textAlign: 'center', lineHeight: '0'}}>
          <h1>{location.state.name}</h1>
          <h5 style={{lineHeight: '0'}}>{location.state.addresses[0].line1}</h5>
          <h5 style={{lineHeight: '0'}}>{location.state.addresses[0].line2}</h5>
          <h5 style={{lineHeight: '0'}}>{location.state.addresses[0].line3}</h5>
          <h5 style={{lineHeight: '0'}}>{location.state.addresses[0].city}, {location.state.addresses[0].stateCode}  {location.state.addresses[0].postalCode}</h5>
        </div>
        <Segment>
          <h3>Description</h3>
          <p>{location.state.desc}</p>
          <p>{location.state.audioDesc}</p>
          <p>For more information visit <a href={location.state.regulationsurl} target="_blank">{location.state.regulationsurl}</a></p>
        </Segment>
        <Segment>
          <h3>Reservation Info</h3>
          <p>{location.state.reservationInfo}</p>
        </Segment>
        <Segment>
          <h3>Amenities</h3>
          <h4>Toilets</h4>
          <p>{location.state.amenities.toilets[0]}</p>
          <hr/>
          <h4>Showers</h4>
          <p>{location.state.amenities.showers[0]}</p>
          <hr/>
          <h4>Potable Water</h4>
          <p>{location.state.amenities.potableWater[0]}</p>
          <hr/>
          <h4>Laundry</h4>
          <p>{location.state.amenities.laundry}</p>
        </Segment>
        <Segment>
          <h3>Availability</h3>
          <h4>Total Available Sites</h4>
          <p>{location.state.campsites.totalSites}</p>
          <h4>Reservable Sites</h4>
          <p>{location.state.numberOfSitesReservable}</p>
          <h4>First Come, First Serve Sites</h4>
          <p>{location.state.numberOfSitesFirstComeFirstServe}</p>
          {renderFees()}
        </Segment>
        <Segment>
          <h3>Photos</h3>
          <Image.Group size='medium'>
            {renderImages()}
          </Image.Group>
        </Segment>
        <Segment>
          <h3>Contact Info</h3>
          <h4>Phone Number</h4>
          { location.state.contacts.phoneNumbers.length > 0 ?
            <p>{location.state.contacts.phoneNumbers[0].phoneNumber}</p>
            : ''
          }
          <h4>Email</h4>
          { location.state.contacts.emailAddresses.length > 0 ?
            <p>{location.state.contacts.emailAddresses[0].emailAddress}</p>
            : ''
          }
        </Segment>
        {/* <Reviews reviewId={id} /> */}
        {/* <Header>Reviews</Header>
        { this.state.reviews ? this.renderReviews() : '...loading'} */}
        {/* <Parks/> */}
      </Container>
    )
  }

export default Campground;
