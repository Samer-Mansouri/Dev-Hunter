import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import { refreshAccessToken } from '../../Api/RefreshToken';
import Loader from '../../Components/Loader';
import SinglePostUser from './SinglePostUser';
function PostListsForUser(props) {

    const {id} = props;
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [size, setSize] = useState(5)

    const fetchPosts = () => {
    
        axios.get(`http://127.0.0.1:8000/api/posts/userposts/${id}`)
        .then(res => {
            console.log(res.data)
            setPosts(res.data)
            if(res.data.length <=0){
                setSize(0)
            }
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
        <div className="container mt-2 mb-5 pt-2">
        <h2 className="h2-style mb-4 mt-5">Projects</h2>
        {
            size <= 0 ?

            <h3 className="h3-style mt-3 text-center">NO PROJECTS</h3>
            :
            <div className="row">
        {
            posts.map((post, index) => {
                return (
                    
                  <Fragment key ={index}>
                    <SinglePostUser
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
    
        }
        
    </div>
      )
  }
  
}

export default PostListsForUser