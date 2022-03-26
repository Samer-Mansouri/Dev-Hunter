import React from 'react'

function Loader() {
  return (

    <div className="myspinner">
    <div className="spinner-border spinner-color" style={{width:"3rem", height:"3rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
    </div>
    
  )
}

export default Loader