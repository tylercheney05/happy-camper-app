import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Container, Form, Button, Grid, Divider } from 'semantic-ui-react'
import { Img, Body } from '../style/Styledcomponents'
import { Component } from 'react'
import { useState, useEffect } from 'react'
import camp4 from "../images/camp4.jpg";

const Home = (props) => {
  const [campgroundValue, setCampgroundValue] = useState('')
  const [latLong, setLatLong] = useState(['',''])

  const options = [
    {key: 'al', text: 'Alabama', value: 'AL', lat: 32.318231, long: -86.902298},
    {key: 'ak', text: 'Alaska', value: 'AK', lat: 63.588753, long: -154.493062},
    {key: 'az', text: 'Arizona', value: 'AZ', lat: 	34.048928, long: -111.093731},
    {key: 'ar', text: 'Arkansas', value: 'AR', lat: 35.20105, long: -91.831833},
    {key: 'ca', text: 'California', value: 'CA', lat: 36.778261, long: -119.417932},
    {key: 'co', text: 'Colorado', value: 'CO', lat: 39.550051, long: -105.782067},
    {key: 'ct', text: 'Connecticut', value: 'CT', lat: 41.603221, long: -73.087749},
    {key: 'de', text: 'Delaware', value: 'DE', lat: 38.910832, long: -75.52767},
    {key: 'dc', text: 'District of Columbia', value: 'DC', lat: 38.905985, long: -77.033418},
    {key: 'fl', text: 'Florida', value: 'FL', lat: 27.664827, long: -81.515754},
    {key: 'ga', text: 'Georgia', value: 'GA', lat: 32.157435, long: -82.907123},  
    {key: 'hi', text: 'Hawaii', value: 'HI', lat: 19.898682, long: -155.665857},
    {key: 'id', text: 'Idaho', value: 'ID', lat: 44.068202, long: -114.742041},
    {key: 'il', text: 'Illinois', value: 'IL', lat: 40.633125, long: -89.398528},
    {key: 'in', text: 'Indiana', value: 'IN', lat: 40.551217, long: -85.602364},
    {key: 'ia', text: 'Iowa', value: 'IA', lat: 41.878003, long: -93.097702},
    {key: 'ks', text: 'Kansas', value: 'KS', lat: 39.011902, long: -98.484246},
    {key: 'ky', text: 'Kentucky', value: 'KY', lat: 37.839333, long: -84.270018},
    {key: 'la', text: 'Louisiana', value: 'LA', lat: 31.244823, long: -92.145024},
    {key: 'me', text: 'Maine', value: 'ME', lat: 45.253783, long: -69.445469},
    {key: 'md', text: 'Maryland', value: 'MD', lat: 39.045755, long: -76.641271},
    {key: 'ma', text: 'Massachusetts', value: 'MA', lat: 42.407211, long: -71.382437},
    {key: 'mi', text: 'Michigan', value: 'MI', lat: 44.314844, long: -85.602364},
    {key: 'mn', text: 'Minnesota', value: 'MN', lat: 46.729553, long: -94.6859},
    {key: 'ms', text: 'Mississippi', value: 'MS', lat: 32.354668, long: -89.398528},
    {key: 'mo', text: 'Missouri', value: 'MO', lat: 37.964253, long: -91.831833},
    {key: 'mt', text: 'Montana', value: 'MT', lat: 46.879682, long: -110.362566},
    {key: 'ne', text: 'Nebraska', value: 'NE', lat: 41.492537, long: -99.901813},
    {key: 'nv', text: 'Nevada', value: 'NV', lat: 38.80261, long: -116.419389},
    {key: 'nh', text: 'New Hampshire', value: 'NH', lat: 43.193852, long: -71.572395},
    {key: 'nj', text: 'New Jersey', value: 'NJ', lat: 40.058324, long: -74.405661},
    {key: 'nm', text: 'New Mexico', value: 'NM', lat: 34.97273, long: -105.032363},
    {key: 'ny', text: 'New York', value: 'NY', lat: 43.299428, long: -74.217933},
    {key: 'nc', text: 'North Carolina', value: 'NC', lat: 35.759573, long: -79.0193},
    {key: 'nd', text: 'North Dakota', value: 'ND', lat: 47.551493, long: -101.002012},
    {key: 'oh', text: 'Ohio', value: 'OH', lat: 40.417287, long: -82.907123},
    {key: 'ok', text: 'Oklahoma', value: 'OK', lat: 35.007752	, long: -97.092877},
    {key: 'or', text: 'Oregon', value: 'OR', lat: 43.804133, long: -120.554201},
    {key: 'pa', text: 'Pennsylvania', value: 'PA', lat: 41.203322, long: -77.194525},
    {key: 'pr', text: 'Puerto Rico', value: 'PR', lat: 18.220833, long: -66.590149},
    {key: 'ri', text: 'Rhode Island', value: 'RI', lat: 41.580095, long: -71.477429},
    {key: 'sc', text: 'South Carolina', value: 'SC', lat: 33.836081, long: -81.163725},
    {key: 'sd', text: 'South Dakota', value: 'SD', lat: 43.969515, long: -99.901813},
    {key: 'tn', text: 'Tennessee', value: 'TN', lat: 35.517491, long: -86.580447},
    {key: 'tx', text: 'Texas', value: 'TX', lat: 31.968599, long: -99.901813},
    {key: 'ut', text: 'Utah', value: 'UT', lat: 39.32098, long: -111.093731},
    {key: 'vt', text: 'Vermont', value: 'VT', lat: 44.558803, long: -72.577841},
    {key: 'va', text: 'Virginia', value: 'VA', lat: 37.431573, long: -78.656894},
    {key: 'wa', text: 'Washington', value: 'WA', lat: 47.751074, long: -120.740139},
    {key: 'wv', text: 'West Virginia', value: 'WV', lat: 38.597626, long: -80.454903},
    {key: 'wi', text: 'Wisconsin', value: 'WI', lat: 43.78444, long: -88.787868},
    {key: 'wy', text: 'Wyoming', value: 'WY', lat: 43.075968, long: -107.290284} 
  ];

    const handleSubmit = (e) => {
      e.preventDefault()
      setCampgroundValue('')
      setLatLong()
    }

      return (
        <Container style={{width: '100%'}}>
          {/* <div>
            <Img src={camp4} alt="homepage" />
          </div> */}
          <Header
            as='h1'
            // inverted
            textAlign='center'
            color='black'
            size='large'
            style={{
              fontFamily: 'QuartzoBold, serif',
              opacity: '0.75',
              backgroundImage: `url(${camp4})`,
              backgroundSize: 'cover',
              height: '250px',
              paddingTop: '100px',
              fontSize: '60px',
              color: 'white',
              fontWeight: 'bold',
              webkitTextStroke: '2px black'
            }}
          >Welcome to Happy Camper</Header>
          <Divider hidden />
          <Divider hidden />
          <Grid centered>
            <Form 
              onSubmit={handleSubmit}
            >
              <h2>Pick state where you'd like to camp</h2>
              <Form.Select
                fluid
                options={options}
                placeholder='Choose State'
                value={campgroundValue}
                onChange={(e, { value }) => setCampgroundValue(value)}
                style={{
                  width: '400px',
                  fontSize: '20px'
                }}
              />
              <Link to={{
                pathname: `/campgrounds/${campgroundValue}`,
                state: {
                  stateValues: options
                }
              }}>
                <Button 
                  type="submit"
                  style={{
                    fontSize: '20px'
                  }}
                >Search</Button>
              </Link>
            </Form>
          </Grid>
        </Container>
      );
  }


export default Home;
