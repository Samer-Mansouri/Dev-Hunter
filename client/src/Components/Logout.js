import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { refreshAccessToken } from '../Api/RefreshToken';
import Loader from './Loader';
import { Redirect } from 'react-router-dom';

function Logout() {

        const [logout, setLogout] = useState(false);


        const handleLogout = () => {
            const token1 = localStorage.getItem("accessToken");
            const token2 = localStorage.getItem("refreshToken");
            const config1 = {
                headers: {
                    'Authorization': `Bearer ${token1}`
                }
            }
            const data = {
              refresh_token: token2
            }
            axios.post('http://127.0.0.1:8000/api/users/logout', data, config1)
                .then(resp => {
                    console.log(resp);
                }).then(localStorage.removeItem('refreshToken'))
                .then(localStorage.removeItem('accessToken'))
                .then(localStorage.removeItem('role'))
                .then(localStorage.removeItem('user_id'))
                .then(setLogout(true))
                .then(window.location.reload(false))
                 .catch(error => {
                    refreshAccessToken(handleLogout);
                })
            }
    useEffect(() => handleLogout(), [])


        if(logout){
            return <Redirect to="/" />
        } else {
            return <div className="mt-3"><Loader /></div>
        }
     
    }

export default Logout