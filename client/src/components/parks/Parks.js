import { useState, useEffect } from 'react'
import axios from 'axios'

const Parks = () => {
  const [parks, setParks] = useState([])
  
  useEffect ( () => {
    axios.get('/parks')
    .then( res => {
      setParks(res.data.data)
    })
  }, [])

  console.log(parks.length)
  const renderParks = () => {
    return parks.map(
      park => (
        <p>{park.name}</p>
      )
    )
  }
  return(
    <>
      <h1>Parks</h1>
      {renderParks()}
    </>
  )
}

export default Parks