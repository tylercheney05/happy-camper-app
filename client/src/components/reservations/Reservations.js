import { Header, Image, Card, Button, Icon, Segment, Container, List } from 'semantic-ui-react'
import { Component } from 'react'
import { useState, useEffect } from 'react'
import AuthConsumer from '../../providers/AuthProvider'

const Reservations = () => {
  const [reservations, setReservations] = useState([])

  const renderReservations = () => {
    <p>{reservations.start_date}</p>
  }

  return (
    <Container>
    <List>
      { renderReservations() }
    </List>
    </Container>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth =>
      <Reservations { ...props } { ...auth } />
    }
  </AuthConsumer>
)
export default Reservations