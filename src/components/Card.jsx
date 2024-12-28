import React from 'react'
import Search from './Search'
import Humidity from './Humidity'
import Icon from './Icon'
import Temp from './Temp'
import City from './City'
import Country from './Country'
import Lat from './Lat'
import Long from './Long'
import Speed from './Speed'

const Card = ({handleChange,city,country,humidity,speed,icon,lat,long,temp,getData,onEnter,loading,error,cityNotFound,text}) => {
  return (
    <>
    
      <div className="Card">
       
        <Search handleChange={handleChange} getData={getData} onEnter={onEnter} text={ text} />
        {loading && <p className='loading'>Loading...</p> }
        {error &&  <p className='error'>{error}</p>}
        {cityNotFound && !error && <p className='cityNotFound'>city Not Found</p>}
        
      { !cityNotFound && !error && !loading && 
        <div className="container">
        
        <Icon icon={ icon} />
        <div className='data'>
          <Temp temp={ temp} />
          <City city={ city} />
          <Country country={ country} />
        </div>
        <div className="cord">
          <Lat lat={ lat} />
          <Long long={ long} />
       </div>
        <div className="other">
          <Humidity humidity={ humidity} />
          <Speed speed={ speed} />
        </div>
       </div>}
      </div>
    </>
  )
}

export default Card