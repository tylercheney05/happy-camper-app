import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Image, Card, Button, Icon, Segment, Container, List } from 'semantic-ui-react'
import { Component } from 'react'
import { useState, useEffect } from 'react'
// import camp3 from "../images/camp3.jpg";

const Campgrounds = (props) => {

  const [campgrounds, setCampgrounds] = useState([])
  
  useEffect ( () => {
    axios.get('/api/campgrounds')
      .then( res => {
        setCampgrounds(res.data)
      })
  }, [])
  
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
                }
            }}>
              View Campground</Link>
          </Card.Content>
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