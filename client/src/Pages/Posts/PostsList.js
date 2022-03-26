import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { refreshAccessToken } from '../../Api/RefreshToken';
import SinglePost from './SinglePost';
import Loader from '../../Components/Loader';
import AddPost from '../Freelancer/AddPost';
function PostsList() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const role = localStorage.getItem("role")
    console.log(role)
    const fetchPosts = () => {

        axios.get('http://127.0.0.1:8000/api/posts/posts')
        .then(res => {
            console.log(res.data)
            setPosts(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(error.message)
        })
    }

    useEffect(() => {
        fetchPosts();
        
    }, [])

  if(loading){
      return <Loader />
  } else {
      return(
        <div className="container mt-2 mb-5 pt-5">
        {
            role == 'dev' ?
            <AddPost />
            : 
            ''
        }
        <h2 className="h2-style mb-4 mt-5">Projects</h2>
        <div className="row">
        {
            posts.map((post, index) => {
                return (
                    
                  <Fragment key ={index}>
                    <SinglePost 
                    id={post.id}
                    title={post.title}
                    description={post.description}
                    github_url = {post.github_url}
                    project_pic = {post.project_pic}
                    user = {post.user}
                    username = {post.username}
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

export default PostsList