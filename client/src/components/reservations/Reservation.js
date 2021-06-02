import { Segment, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { AuthConsumer } from '../../providers/AuthProvider'
import { ReservationConsumer } from '../../providers/ReservationsProvider'

const Reservation = ({id, start_date, end_date, notes, campground_id, reservations, cancelRes, user_id, title, price }) => {
  const [campground, setCampground] = useState([])

  useEffect ( () => {
    axios.get(`/reservations/${campground_id}`)
    .then( res => {
      setCampground(res.data.data)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    cancelRes(user_id, id)
    window.location.href = window.location.href
    // setReservation({start_date: '', end_date: '', notes: '', user_id: user.user.id, campground_id: match.params.id, title: location.state.title, price: location.state.price})
  }

  return (
      <Segment>
        { typeof(campground[0]) == 'undefined'?
          <p>...Loading</p> 
          :
          <h2>{campground[0].name}</h2>
        }
        <h3>{title}</h3>
        <h3>${price}</h3>
        <h4>Start Date</h4>
        <p>{start_date}</p>
        <h4>End Date</h4>
        <p>{end_date}</p>
        <h4>Notes</h4>
        <p>{notes}</p>
        <Button onClick={handleSubmit}>Cancel Reservation</Button>
      </Segment>
  )
}

const ConnectedReservation = (props) => (
  <ReservationConsumer>
    { reservation => <Reservation {...props} {...reservation} />}
  </ReservationConsumer>
)

const AuthConnectedReservation = (props) => (
  <AuthConsumer>
    { auth => <ConnectedReservation {...props} {...auth} />}
  </AuthConsumer>
)
export default ConnectedReservation