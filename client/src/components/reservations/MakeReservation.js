import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { Form } from 'semantic-ui-react'
import { useState } from 'react'
import { AuthConsumer } from '../../providers/AuthProvider'

const MakeReservation = (match, user) => {
  const [reservation, setReservation] = useState({ start_date: '', end_date: '', notes: '', user_id: user.id})

  return(
    <>
    <h1>Make a Reservation</h1>
    <Form 
    // onSubmit={handleSubmit}
    >
      <Form.Input
        label="Notes"
        autoFocus
        name='notes'
        value={reservation.notes}
        placeholder='Enter Notes'
        onChange={(e, { value }) => setReservation({ ...reservation, notes: value })}
        />
      <SemanticDatepicker/>
    </Form>
    </>
  )
}

const ConnectedMakeReservation = (props) => (
  <AuthConsumer>
    { auth => <MakeReservation {...props} {...auth} />}
  </AuthConsumer>
)

export default ConnectedMakeReservation