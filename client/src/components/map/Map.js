import React from 'react'
import GoogleMap from 'google-map-react'
import './map.css'
import LocationPin from './LocationPin'

const Map = ({ location, zoomLevel, campgrounds }) => {
  
  const markerStyle = {
    height: '50px',
    width: '50px',
    marginTop: '-50px'
  }
  
  const imgStyle = {
    height: '100%'
  }

  const Marker = ({ title }) => (
    <div style={markerStyle}>
      <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
      <h3>{title}</h3>
    </div>
  );

  const renderMarkers = () => {
    return campgrounds.map( campground => (
      <Marker
        // title={campground.name}
        lat={campground.latitude}
        lng={campground.longitude}
      />
    ))
  }

  console.log(campgrounds)
  return(
    <div className="google-map">
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        center={{ lat: 5.6219868, lng: -0.1733074 }}
        zoom={14}
      >
        {renderMarkers()}
        {/* <Marker
        title={'Current Location'}
        lat={5.6219868}
        lng={-0.1733074}
      >
        </Marker> */}
      </GoogleMap>
    </div>
  )
}

export default Map