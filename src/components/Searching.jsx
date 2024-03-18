import React from 'react'
import { seaicon } from '../images'

function Searching() {
  return (
    <>
        <div className="search">
          <label style={{fontSize: '164%',textAlign: 'center',color: 'black',margin: '16px 2px',fontFamily: 'var(--ff-chakra-petch)'}}>Search</label>
          <input className="search-box" type="text" placeholder="Enter your location"/>
          <img src={seaicon} style={{width: '47px',height: '60px',margin: '7px 2px',cursor: 'pointer',}}/>
        </div>
    </>
  )
}

export default Searching
