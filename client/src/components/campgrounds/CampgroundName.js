import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react'

const CampgroundName = ({campground_id}) => {
  const [campground, setCampground] = useState([])

  useEffect ( () => {
    axios.get(`/reservations/${campground_id}`)
    .then( res => {
      setCampground(res.data.data)
    })
  }, [])

  return(
    <Header>{campground[0].name}</Header>
  )
}

export default CampgroundName