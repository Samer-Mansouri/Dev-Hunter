import React, { useState } from 'react'
import axios from 'axios';
import { refreshAccessTokenForElementsWithId } from '../../Api/RefreshToken';
function AddPost() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [github_url, setGithub_url] = useState('')

    const [picture, setPicture] = useState('')

    const [loading, setLoading] = useState(false)
    const addPost = () => {
        setLoading(true)
        const token = localStorage.getItem("accessToken");

        var formData = new FormData();
        const config = {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
          }
        }
        formData.append("project_pic", document.getElementById("formFile").files[0])
    
        const data = {
          title: title,
          description: description,
          github_url: github_url
        }

        formData.append("title", title);
        formData.append("description", description)
        formData.append("github_url", github_url)
        axios.post('http://127.0.0.1:8000/api/posts/post', formData, config)
        .then(res => {
          console.log(res)
          setLoading(false)
        }).catch(error => {
          console.log(error.message)
          if(error.response.status == 401){
            refreshAccessTokenForElementsWithId(addPost, data)
          }
          setLoading(false)
        })
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleGithubUrl = (e) => {
      setGithub_url(e.target.value)
    }

  return (
      <>
        <button type="button" className="btn add-btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add Project
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
              <div className="mb-3">
              <div className="row">
                <div className="col-12">
                    <label>Title</label>
                    <input 
                    value={title} onChange={handleTitle}
                    type="text" className="form-control"  aria-label="Title" />
                </div>

                <div className="col-12 mt-2">
                    <label>Github URL</label>
                    <input type="text" 
                    value={github_url} onChange={handleGithubUrl}
                    className="form-control" />
                </div>

                <div className="col-12 mt-2">
                    <label>Description</label>
                    <textarea class="form-control"
                        value={description} onChange={handleDescription}
                    ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">Project screenshot</label>
                  <input className="form-control" type="file" id="formFile" />
                </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary border-style" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn add-btn text-white" onClick={addPost}>
                  {
                    loading ?
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    :
                    <span>Add Post</span>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPost