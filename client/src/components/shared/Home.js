import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Container } from 'semantic-ui-react'
// import { Img, Body } from '../../style/Styledcomponents'
import { Component } from 'react'
import { useState, useEffect } from 'react'
// import camp3 from "../images/camp3.jpg";

const Home = (props) => {

      return (
        <Container>
          {/* <div>
            <Img src={camp3} alt="homepage" />
          </div> */}
          <Header>Home</Header>
        </Container>
      );
  }


export default Home;
