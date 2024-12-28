import React from 'react'
import { WiHumidity } from "react-icons/wi";
const Humidity = ({humidity}) => {
  return (
    <>
    <div className="humidity">
            <div><WiHumidity className='com' /></div>
        <p>{ humidity}</p>
            <p>Humidity</p>
    </div>
    </>
  )
}

export default Humidity