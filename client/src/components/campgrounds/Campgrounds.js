import axios from 'axios'
import { Header, Image, Card, Button, Icon, Segment, Container, List, Grid } from 'semantic-ui-react'
import { Component } from 'react'
import { useState, useEffect } from 'react'
import CampgroundList from './CampgroundList'
import CampgroundForm from './CampgroundForm'
import Map from '../map/Map'

const Campgrounds = ({props, match, location}) => {
  const [campgrounds, setCampgrounds] = useState([])
  // const [lat, setLat] = useState('')

  console.log(location.state.stateValues.filter(state => state.value === match.params.state_code)[0].lat)

  const mapLocation = {
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
      <CampgroundList campground={campground} stateCode={match.params.state_code}/>
    ))
  }
    return (
      <>
        <Header>Campgrounds</Header>
        <Grid style={{paddingLeft: '15px'}}>
          <Grid.Column width={6}>
            <List>
              { renderCampgrounds() }
            </List>
          </Grid.Column>
          <Grid.Column width={10} style={{position: 'fixed', right: '0'}}>
            <Map 
              location={mapLocation} 
              zoomLevel={17} 
              campgrounds={campgrounds}
              lat={location.state.stateValues.filter(state => state.value === match.params.state_code)[0].lat}
              long={location.state.stateValues.filter(state => state.value === match.params.state_code)[0].long}/>
          </Grid.Column>
        </Grid>
      </>
    );
  }

export default Campgrounds;