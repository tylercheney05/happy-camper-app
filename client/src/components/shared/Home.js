import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Container, Form, Button } from 'semantic-ui-react'
import { Img, Body } from '../style/Styledcomponents'
import { Component } from 'react'
import { useState, useEffect } from 'react'
import camp4 from "../images/camp4.jpg";

const Home = (props) => {
  const [campgroundValue, setCampgroundValue] = useState('')

  const options = [
    {key: 'al', text: 'Alabama', value: 'AL'},
    {key: 'ak', text: 'Alaska', value: 'AK'},
    {key: 'as', text: 'American Samoa', value: 'AS'},
    {key: 'az', text: 'Arizona', value: 'AZ'},
    {key: 'ar', text: 'Arkansas', value: 'AR'},
    {key: 'ca', text: 'California', value: 'CA'},
    {key: 'co', text: 'Colorado', value: 'CO'},
    {key: 'ct', text: 'Connecticut', value: 'CT'},
    {key: 'de', text: 'Delaware', value: 'DE'},
    {key: 'dc', text: 'District of Columbia', value: 'DC'},
    {key: 'fm', text: 'Federated States Of Micronesia', value: 'FM'},
    {key: 'fl', text: 'Florida', value: 'FL'},
    {key: 'ga', text: 'Georgia', value: 'GA'},
    {key: 'gu', text: 'Guam', value: 'GU'},
    {key: 'hi', text: 'Hawaii', value: 'HI'},
    {key: 'id', text: 'Idaho', value: 'ID'},
    {key: 'il', text: 'Illinois', value: 'IL'},
    {key: 'in', text: 'Indiana', value: 'IN'},
    {key: 'ia', text: 'Iowa', value: 'IA'},
    {key: 'ks', text: 'Kansas', value: 'KS'},
    {key: 'ky', text: 'Kentucky', value: 'KY'},
    {key: 'la', text: 'Louisiana', value: 'LA'},
    {key: 'me', text: 'Maine', value: 'ME'},
    {key: 'mh', text: 'Marshall Islands', value: 'MH'},
    {key: 'md', text: 'Maryland', value: 'MD'},
    {key: 'ma', text: 'Massachusetts', value: 'MA'},
    {key: 'mi', text: 'Michigan', value: 'MI'},
    {key: 'mn', text: 'Minnesota', value: 'MN'},
    {key: 'ms', text: 'Mississippi', value: 'MS'},
    {key: 'mo', text: 'Missouri', value: 'MO'},
    {key: 'mt', text: 'Montana', value: 'MT'},
    {key: 'ne', text: 'Nebraska', value: 'NE'},
    {key: 'nv', text: 'Nevada', value: 'NV'},
    {key: 'nh', text: 'New Hampshire', value: 'NH'},
    {key: 'nj', text: 'New Jersey', value: 'NJ'},
    {key: 'nm', text: 'New Mexico', value: 'NM'},
    {key: 'ny', text: 'New York', value: 'NY'},
    {key: 'nc', text: 'North Carolina', value: 'NC'},
    {key: 'nd', text: 'North Dakota', value: 'ND'},
    {key: 'mp', text: 'Northern Mariana Islands', value: 'MP'},
    {key: 'oh', text: 'Ohio', value: 'OH'},
    {key: 'ok', text: 'Oklahoma', value: 'OK'},
    {key: 'or', text: 'Oregon', value: 'OR'},
    {key: 'pw', text: 'Palau', value: 'PW'},
    {key: 'pa', text: 'Pennsylvania', value: 'PA'},
    {key: 'pr', text: 'Puerto Rico', value: 'PR'},
    {key: 'ri', text: 'Rhode Island', value: 'RI'},
    {key: 'sc', text: 'South Carolina', value: 'SC'},
    {key: 'sd', text: 'South Dakota', value: 'SD'},
    {key: 'tn', text: 'Tennessee', value: 'TN'},
    {key: 'tx', text: 'Texas', value: 'TX'},
    {key: 'ut', text: 'Utah', value: 'UT'},
    {key: 'vt', text: 'Vermont', value: 'VT'},
    {key: 'vi', text: 'Virgin Islands', value: 'VI'},
    {key: 'va', text: 'Virginia', value: 'VA'},
    {key: 'wa', text: 'Washington', value: 'WA'},
    {key: 'wv', text: 'West Virginia', value: 'WV'},
    {key: 'wi', text: 'Wisconsin', value: 'WI'},
    {key: 'wy', text: 'Wyoming', value: 'WY'} 
  ];

    const handleSubmit = (e) => {
      e.preventDefault()
      setCampgroundValue('')
    }
      return (
        <Container>
          <div>
            <Img src={camp4} alt="homepage" />
          </div>
          <Header>Welcome to Happy Camper</Header>
          <Form onSubmit={handleSubmit}>
            <Form.Select
              fluid
              label='State'
              options={options}
              placeholder='Choose State'
              value={campgroundValue}
              onChange={(e, { value }) => setCampgroundValue(value)}
            />
            <Link to={{
              pathname: `/campgrounds/${campgroundValue}`
            }}>
              <Button type="submit">Submit</Button>
            </Link>
          </Form>
        </Container>
      );
  }


export default Home;
