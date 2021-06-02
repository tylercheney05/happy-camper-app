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

  const cancelRes = (user_id, id) => {
    axios.delete(`/api/users/${user_id}/reservations/${id}`)
      .then( res => {
        setReservations(reservations.filter((reservation) => reservation.id !== id))
      })
      .catch( err => console.log(err))
  }

  return(
    <ReservationContext.Provider value={{
      makeReservation,
      cancelRes
    }}>
      { children }
    </ReservationContext.Provider>
  )
}

export default ReservationProvider