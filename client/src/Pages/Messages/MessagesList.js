import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import SingleMessage from './SingleMessage'
import Loader from '../../Components/Loader'
function MessagesList() {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(true)
    const fetchMessages = () => {
        
        const token = localStorage.getItem("accessToken");

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        }

        axios.get(`http://127.0.0.1:8000/api/posts/messages`,config)
        .then(res => {
            console.log(res.data)
            setData(res.data)
            setLoad(false);
            
        })
        .catch(err => {
            console.log(err.message)
            if(error.response.status == 401){
                refreshAccessToken(fetchMessages);
            }
        })
    }

    useEffect(() => {
        fetchMessages()
    }, [])
  if(load){
      return <Loader />
  } else {
    return (
        
        <div className="container mt-5">
            <div className="row">
                <h2 className="h5-style">Received Messages</h2>
            {
                data.map((msg, index) => {
                    return (
                        
                      <Fragment key ={index}>
                        <SingleMessage 
                        sender={msg.sender_username}
                        receiver={msg.receiver}
                        subject={msg.subject}
                        message={msg.message}
                        
                        />
                      </Fragment>
                      
                    )
                  })
    
            }
            
            </div>
        </div>
      )
  }
}

export default MessagesList