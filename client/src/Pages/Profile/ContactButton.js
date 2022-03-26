import React, { useState } from 'react'
import axios from 'axios'
function ContactButton(props) {

    const {id, first_name, last_name} = props;
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [err, setErr] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubject = (e) => {
      setSubject(e.target.value)
    }
  
    const handleMessage = (e) => {
      setMessage(e.target.value)
    }

    const sendMessage = () => {

        if(message.length > 0 || subject.length > 0){
    
    
          const token = localStorage.getItem("accessToken");
    
          const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
          }

          const data = {
            subject: subject,
            message: message
          }
          
    
          axios.post(`http://127.0.0.1:8000/api/posts/message/${id}`, data,config)
          .then(res => {
            setSent(true)
          })
          .catch(err => {
            console.log(err)
            if(err.response.status == 401){
              refreshAccessTokenForElementsWithId(addPost, data)
            }
          }
            )
    
    
        } else {
          setErr(true)
        }
    
      }
  return (
    <div>
    {/* Button trigger modal */}
    <button type="button" className="btn add-btn text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Hire Developer
        </button>
        {/* Modal */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Hire {first_name} {last_name}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">

                {
                  err ? 
                  <div class="alert alert-danger" role="alert">
                    Please verify the fields of the form
                  </div>
                  :
                  ''
                }

                {
                  sent ?
                  <div class="alert alert-success" role="alert">
                    Message sent with success
                  </div>
                  : ''
                }
             
                <form className="pt-3 pb-3" >
                    <div className="form-group text-start mb-3">
                        <label className="form-label"
                        >Subject</label>
                        <input type="text"
                          value={subject} onChange={handleSubject}
                        className="form-control" />
                    </div>

                    <div className="form-group text-start mb-3">
                        <label className="form-label">Message</label>
                        <textarea id="message"
                        value={message} onChange={handleMessage} 
                        name="message" className="form-control" placeholder="Write your message" id="floatingTextarea" defaultValue={""} />
                    </div>
                </form> 
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary border-style" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn add-btn text-white" onClick={sendMessage}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactButton