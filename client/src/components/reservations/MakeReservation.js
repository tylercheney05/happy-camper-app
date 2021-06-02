import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Form, Button, Container } from 'semantic-ui-react'
import { useState } from 'react'
import { AuthConsumer } from '../../providers/AuthProvider'
import { ReservationConsumer } from '../../providers/ReservationsProvider'

const MakeReservation = ({match, user, makeReservation, location}) => {
  const [reservation, setReservation] = useState({ start_date: '', end_date: '', notes: '', user_id: user.id, campground_id: match.params.id, title: location.state.title, price: location.state.price})

  const handleSubmit = (e) => {
    e.preventDefault()
    makeReservation(user.id,reservation)
    setReservation({start_date: '', end_date: '', notes: '', user_id: user.id, campground_id: match.params.id, title: location.state.title, price: location.state.price})
  }

  return(
    <Container>
      <div style={{textAlign: 'center'}}>
        <h1>Make a Reservation at {location.state.name}</h1>
        <h3>{location.state.title}</h3>
        <h3>${location.state.price}</h3>
      </div>
      <Container style={{padding: '0 100px 0 100px'}}>
        <Form 
        onSubmit={handleSubmit}
        >
          <SemanticDatepicker
            label="Start Date"
            name="start_date"
            value={reservation.start_date}
            onChange={(e, { value }) => setReservation({...reservation, start_date: value})}
          /><br/>
          <SemanticDatepicker
            label="End Date"
            name="end_date"
            value={reservation.end_date}
            onChange={(e, { value }) => setReservation({...reservation, end_date: value})}
          />
          <Form.TextArea
            label="Notes"
            autoFocus
            name='notes'
            value={reservation.notes}
            placeholder='Enter Notes'
            onChange={(e, { value }) => setReservation({ ...reservation, notes: value })}
            />
            <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </Container>
  )
}

const ConnectedMakeReservation = (props) => (
  <ReservationConsumer>
    { reservation => <MakeReservation {...props} {...reservation} />}
  </ReservationConsumer>
)

const AuthConnectedMakeReservation = (props) => (
  <AuthConsumer>
    { auth => <ConnectedMakeReservation {...props} {...auth} />}
  </AuthConsumer>
)

export default AuthConnectedMakeReservation