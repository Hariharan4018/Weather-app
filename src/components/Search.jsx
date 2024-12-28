import React from 'react'
import { TbMapPinSearch } from "react-icons/tb";

const Search = ({ handleChange,getData,onEnter,text}) => {
  return (
    <>
      <div className="Search">
          <input type="text" name="" id="" onChange={handleChange} onKeyDown={onEnter} value={text}/>
          <TbMapPinSearch  className='SearchButton' onClick={getData}/>
        </div>
   </>
  )
}

export default Search