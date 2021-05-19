import { Header, Image, Card, Button, Icon, Segment, Container, List } from 'semantic-ui-react'
import { Component } from 'react'
import { useState, useEffect, useContext } from 'react'
import { ReservationConsumer } from '../../providers/ReservationsProvider'
import axios from 'axios'
import Reservation from './Reservation'

const Reservations = ({match}) => {
  const [reservations, setReservations] = useState([])

  useEffect ( () => {
    axios.get(`/api/users/${match.params.id}/reservations`)
      .then( res => {
        setReservations(res.data)
      })
  }, [])

  const renderReservations = () => {
    return reservations.map(
      // reservation => <Reservation key={reservation.id} {...reservation} />
      reservation => (
        <p>{reservation.id}</p>
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

export default ConnectedReservations