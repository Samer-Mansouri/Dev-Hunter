import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import Loader from '../../Components/Loader';
import { refreshAccessToken } from '../../Api/RefreshToken';

function SingleProject() {
    let { id } = useParams();

    const [post, setPost] = useState([])
    const [load, setLoad] = useState(true)
    const [rate, setRate] = useState(0)
    const [notFound, setNotFound] = useState(false)
    const ratingChanged = () => {
        console.log(newRating);
    };

    const fetchPost = () => {
        axios.get(`http://127.0.0.1:8000/api/posts/singlepost/${id}`)
        .then(response => {
            console.log(response.data);
            setPost(response.data)
            setLoad(false)
        })
        .catch(err => {
            console.log(err)
            if(err.response.status == 404){
                setNotFound(true)
                setLoad(false)
            }
        })
    }

    const userRating = () => {
        const token = localStorage.getItem("accessToken");

        const config = {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
          }
        }

        axios.get(`http://127.0.0.1:8000/api/posts/rate/${id}`, config)
        .then(response => {
            console.log(response.data);
            if(response.data.length > 0){
                console.log(response.data[0].rate)
                setRate(response.data[0].rate)
            }
        })
        .catch(err => {
            console.log(err)

        })
    }

    const RateProject = (newRating) => {
        const token = localStorage.getItem("accessToken");

        const config = {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
          }
        }
        axios.post(`http://127.0.0.1:8000/api/posts/rate/${id}`, {rate: newRating}, config)
        .then(response => console.log(response.data))
        .catch(err => {
            if(error.response.status == 401){
                refreshAccessToken(RateProject)
            }
        }) 
    }

    
    useEffect(() => {
        userRating();
        fetchPost();
    }, [])

  if(load){
      return <Loader />
  } else if(notFound){
    return <div className="container"><h2 className="h5-style mt-5">Project does not exist</h2></div>
    } else {
    return (
        <div className="container mb-4">
            <div className="row mt-5">
                <div className="col-12 rounded shadow p-4">
                <h3 className="text-center mb-3">{post.title}</h3>
                <img src={`http://127.0.0.1:8000${post.project_pic}`} alt="project_pic" className="w-100"/>
                <a href={post.github_url} target="_blank">See on github</a>
                <p className="mt-2">{post.description}</p>
                <div >
                
                    {
                        localStorage.getItem("refreshToken") ?
                        <div>
                            <p>Rate project : </p><ReactStars
                        count={5}
                        onChange={RateProject}
                        value={rate}
                        size={40}
                        activeColor="#ffd700"
                    />
                        </div>
                        :
                    ''
                    }
                </div>
                </div>
            </div>
        </div>
      )
  }
}

export default SingleProject