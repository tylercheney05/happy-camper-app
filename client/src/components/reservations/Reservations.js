import { Header, Image, Card, Button, Icon, Segment, Container, List } from 'semantic-ui-react'
import { Component } from 'react'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Reservation from './Reservation'
import { AuthConsumer } from '../../providers/AuthProvider'

const Reservations = ({match, user}) => {
  const [reservations, setReservations] = useState([])
    useEffect ( () => {
        axios.get(`/api/userReservations/${user.id}`)
          .then( res => {
            setReservations(res.data)
          })
    }, [])

  const renderReservations = () => {
    return reservations.map(
      reservation => ( <Reservation key={reservation.id} {...reservation} reservations={reservations} setReservations={setReservations}/>
      )
    )
  }

  return (
    <Container>
    <h1 style={{textAlign: 'center'}}>My Reservations</h1>
        { renderReservations()}
    </Container>
  )
}

const ConnectedReservations = (props) => (
  <AuthConsumer>
    { auth => <Reservations {...props} {...auth} />}
  </AuthConsumer>
)

export default ConnectedReservations