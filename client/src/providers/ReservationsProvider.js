import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const ReservationContext = React.createContext();
export const ReservationConsumer = ReservationContext.Consumer;

const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([])

  // const getReservations = (user_id) => {
  //   useEffect ( () => {
  //     axios.get(`/api/users/${user_id}/reservations`)
  //       .then( res => {
  //         setReservations(res.data)
  //       })
  //   }, [])
  // }

  return(
    <ReservationContext.Provider value={{
      // getReservations
    }}>
      { children }
    </ReservationContext.Provider>
  )
}

export default ReservationProvider