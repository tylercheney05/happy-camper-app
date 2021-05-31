import React from 'react';
import Campground from './Campground'
import campDefault from '../images/camping-default.jpeg'
import { Link } from 'react-router-dom'
import { Header, Image, Card, Button, Icon, Segment, Container, List, Grid } from 'semantic-ui-react'

const CampgroundList = ({ campground, stateCode }) => {
  const campgroundState = {
    campgroundId: campground.id,
    name: campground.name,
    addresses: campground.addresses,
    desc: campground.description,
    audioDesc: campground.audioDescription,
    sites: campground.sites,
    fees: campground.fees,
    amenities: campground.amenities,
    reservationInfo: campground.reservationInfo,
    images: campground.images,
    campsites: campground.campsites,
    contacts: campground.contacts,
    regulationsurl: campground.regulationsurl
    // updateCampground: this.updateCampground
  }

  const pathname = `/campgrounds/${stateCode}/${campground.id}`

  return(
  <Card key={campground.id} style={{width: '100%', padding: '10px'}}>
    <Grid>
      <Grid.Column width={6}>
        {
          campground.images.length > 0 ? 
          <Link to={{
            pathname: pathname,
            state: campgroundState
          }}>
            <Image src={campground.images[0].url} />
          </Link> : 
          <Link to={{
            pathname: pathname,
            state: campgroundState
          }}>
            <Image src={campDefault} />
          </Link>
        }
      </Grid.Column>
      <Grid.Column width={10}>
        <Link to={{
          pathname: pathname,
          state: campgroundState
        }}>
          <Card.Header style={{fontWeight: 'bold', fontSize: '16px', paddingBottom: '5px'}}>{campground.name}</Card.Header>
        </Link>
          {
          campground.addresses.length > 0 ? 
            <Card.Meta>
              {campground.addresses[0].city}, {campground.addresses[0].stateCode}
            </Card.Meta>
            : ''
        }
        <div style={{position: 'absolute', bottom: '20px', left: '10px'}}>
          <Link to={{
            pathname: `/reservations/${campground.id}/new`
          }}>
            <Button style={{verticalAlign: 'bottom'}}>Make a Reservation</Button>
          </Link>
        </div>

      </Grid.Column>
    </Grid>
    </Card>
  )
}

export default CampgroundList
