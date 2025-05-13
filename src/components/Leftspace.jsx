import React, { useState } from 'react'
import { spacesLeft } from './Details'

const Leftspace = ({spaces}) => {
    
  return (
    <>
    {spaces.map((item, index) => (
        <div className="space-container" key={index}>
          <img src={item.url} alt={item.name} />
          <p>{item.name}</p>
          <span></span>
        </div>
    ))}
    </>
  )
}

export default Leftspace
