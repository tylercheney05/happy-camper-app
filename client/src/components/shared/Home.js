import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Container } from 'semantic-ui-react'
import { Img, Body } from '../style/Styledcomponents'
import { Component } from 'react'
import { useState, useEffect } from 'react'
import camp4 from "../images/camp4.jpg";

const Home = (props) => {

      return (
        <Container>
          <div>
            <Img src={camp4} alt="homepage" />
          </div>
          <Header>Welcome to Happy Camper</Header>
        </Container>
      );
  }


export default Home;
