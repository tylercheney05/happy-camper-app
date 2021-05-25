import { Icon } from 'iconify'
// import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="mdi:map-marker" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export default LocationPin