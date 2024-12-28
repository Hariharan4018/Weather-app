import React from 'react'
import { MdWindPower } from "react-icons/md";

const Speed = ({speed}) => {
  return (
    <>
    <div className="speed">
            <MdWindPower className='com'/>
        <p>{ speed}</p>
            <p>Speed</p>
  </div>
    </>
  )
}

export default Speed