const Reservation = ({start_date, end_date, notes}) => {
  return (
      <>
          <h3>{start_date}</h3>
          <h4>{end_date}</h4>
          <h4>Notes: {notes}</h4>

      </>
  )
}
export default Reservation