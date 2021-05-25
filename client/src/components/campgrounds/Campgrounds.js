import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Image, Card, Button, Icon, Segment, Container, List, Grid } from 'semantic-ui-react'
import { Component } from 'react'
import { useState, useEffect } from 'react'
import CampgroundList from './CampgroundList'
import CampgroundForm from './CampgroundForm'
import campDefault from '../images/camping-default.jpeg'
import Map from '../map/Map'

const Campgrounds = ({props, match}) => {
  const [campgrounds, setCampgrounds] = useState([])
  
  // useEffect ( () => {
  //   axios.get('/api/campgrounds')
  //     .then( res => {
  //       setCampgrounds(res.data)
  //     })
  // }, [])

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  useEffect ( () => {
    axios.get(`/campgrounds/${match.params.state_code}`)
    .then( res => {
      setCampgrounds(res.data.data)
    })
  }, [])

  // const updateCampground = (id, campground) => {
  //   // TODO make api call to update todo
  //   // TODO update state
  //   axios.put(`/api/campground/${id}`, { campground })
  //     .then( res => {
  //       const campgrounds = this.state.campgrounds.map( c => {
  //         if (c.id === id)
  //           return res.data
  //         return c;
  //       });
  //       this.setState({ campgrounds })
  //     })
  // }

  const deleteCampground = (id) => {
    axios.delete(`/api/campgrounds/${id}`)
      .then( res => {
        const { campgrounds } = this.state;
        this.setState({ campgrounds: campgrounds.filter(c => c.id !== id) })
      })
      .catch( err => console.log(err))
    }
  
  const renderCampgrounds = () => {
    // console.log(campgrounds[0].addresses[0].city)
    return campgrounds.map( campground => (
      <Card key={campground.id}>
        <Card.Content>
          <Card.Header>{campground.name}</Card.Header>
          {
            campground.images.length > 0 ? <Image src={campground.images[0].url} /> : <Image src={campDefault} />
          }
            {
            campground.addresses.length > 0 ? <p>{campground.addresses[0].city}, {campground.addresses[0].stateCode}</p>: ''
          }
          <Link to={{
            pathname: `/campgrounds/${match.params.state_code}/${campground.id}`,
            state: {
              campgroundId: campground.id,
              name: campground.name,
              location: campground.location,
              description: campground.description,
              sites: campground.sites,
              price: campground.price,
              // updateCampground: this.updateCampground
              }
          }}>
            View Campground</Link>
        </Card.Content>
        <Link to={{
          pathname: `/reservations/${campground.id}/new`
        }}>
          <Button>Make a Reservation</Button>
        </Link>
      </Card>
    ))
  }
    return (
      <Container>
        <Header>Campgrounds</Header>
        <Map location={location} zoomLevel={17}/>
        <List>
          { renderCampgrounds() }
        </List>
      </Container>
    );
  }

export default Campgrounds;