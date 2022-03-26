import React from 'react'
import { Link } from 'react-router-dom';
import github from './github.png';

function SinglePost(props) {
    
    const {id ,title, description, github_url, project_pic, username, user} = props
    
    
    return (
    <div className="col-lg-4 mt-3">
        <div className="rounded shadow text-center p-3 me-3 ms-3 mb-4 h-100 post-style">
            <h6 className="mb-3"><Link to={`/project/${id}`} className="link-style border rounded mb-3 pt-1 pb-1 ps-5 pe-5">{title}</Link></h6>
            <h6 className="mb-3"><Link to={`/profile/${user}`} className="link-style border rounded mb-3 pt-1 pb-1 ps-5 pe-5">{username}</Link></h6>
            <img src={project_pic} alt="project_pic" className="w-100"/>
            <a href={github_url} target="_blank" className="github-style">
                <img src={github} alt="github" style={{width:"50px"}} className="mt-2"/>
            </a>
            <div>
            </div>
        </div>
    </div>
  )
}

export default SinglePost