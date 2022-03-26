import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Loader from '../../Components/Loader';
import ContactButton from './ContactButton';
import PostListsForUser from '../Posts/PostListsForUser';

function Profile() {

  let { id } = useParams()

  const [profile, setProfile] = useState([])

  const [loading, setLoading] = useState(true)

  const [notFound, setNotFound] = useState(false)

  const getProfile = () => {
    
      axios.get(`http://127.0.0.1:8000/api/users/dev/${id}`)
      .then(response => {
          console.log(response.data);
          setProfile(response.data)
          console.log(profile);
         setLoading(false)
      })
      .catch(err => {
          console.log(err)
          if(err.response.status == 401){
              refreshAccessToken(userRating)
          }

          if(err.response.status = 404){
            setNotFound(true)
            setLoading(false)

          }
      })
    

    
  }


  useEffect(() => {
    getProfile();
  }, [])

  if(loading){
    return <Loader />
  } else if(notFound){
      return <div className="container"><h2 className="h5-style mt-5">Profile does not exist</h2></div>
  } else {
    return (
      <>
          <div className="container mt-4">
            <div className="row">
              <div className="col-12 text-center border pt-2 pb-2 ps-5 pe-5 shadow">
                <h5 className="mb-2" className="h5-style">{profile.first_name} {profile.last_name}</h5>
                <img src={`http://127.0.0.1:8000${profile.profile_pic}`} alt="profile_pic" className="w-25 rounded-circle"/>
                <h6 className="mt-3">{profile.username}</h6>
                <h6>{profile.email}</h6>
                <h6>{profile.phone_number}</h6>
                
                <div>
                
                {
                  localStorage.getItem("refreshToken")
                  ?
                  <ContactButton id={profile.id} first_name={profile.first_name} last_name={profile.last_name}/>

                  :
                  ''
                }
      </div>
  
              </div>

              <div className="col-12 mt-5">
                <PostListsForUser id={profile.id}/>
              </div>
            </div>
          </div>
      </>
    )
  }
}

export default Profile