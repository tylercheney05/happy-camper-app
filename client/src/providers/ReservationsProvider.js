import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const ReservationContext = React.createContext();
export const ReservationConsumer = ReservationContext.Consumer;

const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([])

  const makeReservation = (user_id, reservation) => {
    axios.post(`/api/users/${user_id}/reservations`, { reservation })
    .then( res => {
      setReservations([...reservations, res.data])
    })
    .catch( err => console.log(err))
  }

  return(
    <ReservationContext.Provider value={{
      makeReservation
    }}>
      { children }
    </ReservationContext.Provider>
  )
}

export default ReservationProvider