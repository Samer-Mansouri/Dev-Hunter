import React, { useState } from 'react'

import axios from "axios";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function ConnectionForm() {
 
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
        console.log(email, password);
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
                localStorage.setItem("user_id", response.data.id)
                window.location.reload(false)
                setConnected(true)
            })
        .catch(error => console.log(error))

    }

    if(connected){
        return <Redirect to="/projects" />
    }

    return (

    <form className="pt-4 pb-4 ps-3 pe-3" onSubmit={handleSubmit}>
        <h2 className="text-center mb-3">Se Connecter</h2>
        <div className="form-floating mb-3">
            <input id="email" type="text"
                value={email} onChange={handleEmail}
            name="email" className="form-control"  id="floatingInputValue"  />
            <label htmlFor="floatingTextarea">Email</label>
        </div>

        <div className="form-floating mb-3">
            <input id="password" type="password"
                value={password} onChange={handlePassword}
            name="password" className="form-control" id="floatingInputValue" />
            <label htmlFor="floatingTextarea">Mot de passe</label>
        </div>

        <div className="form-group">
            <button className="btn w-100 pt-2 pb-2" id="my-butt" type="submit">Se connecter</button>
        </div>
    </form>
  )
}

export default ConnectionForm