import React from 'react';
import Campground from './Campground'
import { Card } from 'semantic-ui-react'
import { Img, Body, CardInfoContainer } from "../style/Styledcomponents"

const CampgroundList = ({campgrounds, deleteCampground, updateCampground }) => (
  
  <Card.Group centered>
    {campgrounds.map (c =>
      <Card>
        <Campground
          key={c.id}
        
          {...c}
          deleteCampground={deleteCampground}
          updateCampground={updateCampground}
        />
      </Card>
      )}
  </Card.Group>
)

export default CampgroundList
