import { Header, Image, Card, Button, Icon, Segment, Container, List } from 'semantic-ui-react'
import { Component } from 'react'
import { useState, useEffect, useContext } from 'react'
import { ReservationConsumer } from '../../providers/ReservationsProvider'
import axios from 'axios'
import Reservation from './Reservation'
import { AuthConsumer } from '../../providers/AuthProvider'

const Reservations = ({match, user}) => {
  const [reservations, setReservations] = useState([])

  useEffect ( () => {
    axios.get(`/api/userReservations/${user.user.id}`)
      .then( res => {
        setReservations(res.data)
      })
  }, [])

  const renderReservations = () => {
    return reservations.map(
      reservation => ( <Reservation key={reservation.id} {...reservation} />
      )
    )
  }

  return (
    <Container>
    <Header>Reservations</Header>
        { renderReservations()}
    </Container>
  )
}

const ConnectedReservations = (props) => (
  <ReservationConsumer>
    { reservation => <Reservations {...props} {...reservation} />}
  </ReservationConsumer>
)

const AuthConnectedReservations = (props) => (
  <AuthConsumer>
    { auth => <ConnectedReservations {...props} {...auth} />}
  </AuthConsumer>
)

export default AuthConnectedReservations