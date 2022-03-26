import React, { useState } from 'react'

import axios from "axios";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function ContactForm() {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [connected, setConnected] = useState(false)


    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/users/login', {
            email: email,
            password: password
        }, {
            'Content-Type': 'application/json'
            }).then(response => {
                console.log(response.data)
                localStorage.setItem("accessToken", response.data.access)
                localStorage.setItem("refreshToken", response.data.refresh)
                localStorage.setItem("role", response.data.role)
                setConnected(true)
            })
        .catch(error => console.log(error))

    }

    if(connected){
        return <Redirect to="/projects" />
    }

    return (

    
  )
}

export default ContactForm