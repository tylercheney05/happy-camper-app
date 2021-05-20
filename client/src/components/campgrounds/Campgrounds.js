import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Image, Card, Button, Icon, Segment, Container, List } from 'semantic-ui-react'
import { Component } from 'react'
import { useState, useEffect } from 'react'
import CampgroundList from './CampgroundList'
import CampgroundForm from './CampgroundForm'
// import camp3 from "../images/camp3.jpg";

const Campgrounds = (props) => {

  const [campgrounds, setCampgrounds] = useState([])
  
  useEffect ( () => {
    axios.get('/api/campgrounds')
      .then( res => {
        setCampgrounds(res.data)
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
    return campgrounds.map( campground => (
      <Segment key={campground.id}>
        <Card>
          <Card.Content>
            <Card.Header>{campground.name}</Card.Header>
            <Link to={{
              pathname: `/campgrounds/${campground.id}`,
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
      </Segment>
    ))
  }
    return (
      <Container>
        <Header>Campgrounds</Header>
        <List>
          { renderCampgrounds() }
        </List>
      </Container>
    );
  }

export default Campgrounds;