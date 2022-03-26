import React from 'react'

function SingleMessage(props) {

    const {receiver, sender, message, subject} = props
  return (
    <div className="col-12 pt-2 mt-3 pb-2 ps-4 pe-4 shadow border">
        <h4 className="text-start h5-style">
            Received from {sender}
        </h4>
        <h3>Subject: {subject}</h3>
        <p>{message}</p>
    </div>
  )
}

export default SingleMessage