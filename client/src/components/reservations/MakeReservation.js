import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Form, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { AuthConsumer } from '../../providers/AuthProvider'
import { ReservationConsumer } from '../../providers/ReservationsProvider'

const MakeReservation = ({match, user, makeReservation}) => {
  const [reservation, setReservation] = useState({ start_date: '', end_date: '', notes: '', user_id: user.user.id})

  const handleSubmit = (e) => {
    e.preventDefault()
    makeReservation(match.params.id,reservation)
    setReservation({start_date: '', end_date: '', notes: '', user_id: user.user.id})
  }

  return(
    <>
    <h1>Make a Reservation</h1>
    <Form 
    onSubmit={handleSubmit}
    >
      <SemanticDatepicker
        label="Start Date"
        autoFocus
        name="start_date"
        value={reservation.start_date}
        onChange={(e, { value }) => setReservation({...reservation, start_date: value})}
      />
       <SemanticDatepicker
        label="End Date"
        autoFocus
        name="end_date"
        value={reservation.end_date}
        onChange={(e, { value }) => setReservation({...reservation, end_date: value})}
      />
      <Form.Input
        label="Notes"
        autoFocus
        name='notes'
        value={reservation.notes}
        placeholder='Enter Notes'
        onChange={(e, { value }) => setReservation({ ...reservation, notes: value })}
        />
        <Button type="submit">Submit</Button>
    </Form>
    </>
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