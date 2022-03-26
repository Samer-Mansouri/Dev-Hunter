import React from 'react'
import Navbar from '../Layouts/Navbar'
import Signup from './Signup/Signup'
import banner from '../Assets/Images/banner.png'
import AddPost from './Freelancer/AddPost'
import back from '../Assets/Images/ezyZip/bckgrnd.png';
import Footer from '../Layouts/Footer'
function Home() {

  const url ='https://i.imgur.com/0byOhwQ.jpg'

  return (
    <>
        <div className="img">
          <div className="mt-5 pt-5"> 

          <h1 className="text-white  ms-5 mt-5">Welcome to our platform</h1>
          <h5 className="text-white ms-5 me-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum
        velit mollitia dolorem facilis suscipit cumque, molestias ut ex magni
        natus laudantium totam quisquam.
        vitae?
          </h5>
          </div>
        </div>
        
        <h3 className="mt-4 ms-5" style={{color:'#870000'}}>Why Do People Choose Us</h3>

        <div className="container-fluid pe-5 ps-5 mt-5">
          <div className="row gx-2">

            <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
                <div className="rounded shadow text-center p-3 me-3 ms-3 box-style">
                  <h5 className="h5-style">Credibility</h5>
                  <p>We verify Freelancers, publish their feedback scores and All-Time Transaction Data to help you identify time-tested professionals across the globe.</p>
                </div>
            </div>
          
            <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
                <div className="rounded shadow text-center p-3 me-3 ms-3 box-style">
                  <h5 className="h5-style">Security</h5>
                  <p>We verify Freelancers, publish their feedback scores and All-Time Transaction Data to help you identify time-tested professionals across the globe.</p>
                </div>
            </div>
          

            <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
                <div className="rounded shadow text-center p-3 me-3 ms-3 box-style">
                  <h5 className="h5-style">Support</h5>
                  <p>We verify Freelancers, publish their feedback scores and All-Time Transaction Data to help you identify time-tested professionals across the globe.</p>
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 mt-2">
                <div className="rounded shadow text-center p-3 me-3 ms-3 box-style">
                  <h5 className="h5-style">Flexibility</h5>
                  <p>We verify Freelancers, publish their feedback scores and All-Time Transaction Data to help you identify time-tested professionals across the globe.</p>
                </div>
            </div>
      
            
          </div>
        </div>

        <h3 className="mt-5 ms-5" style={{color:'#870000'}}>It's Easy to Get Work Done on our platform</h3>

        <div className="container">

          <div className="row mt-4 mb-4">

            <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
              <div className="rounded shadow text-center p-3 me-3 ms-3 box-style">
                <h5 className="h5-style">Hire Freelancers</h5>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum
        velit mollitia dolorem facilis suscipit cumque                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
              <div className="rounded shadow text-center p-3 me-3 ms-3 box-style">
                <h5 className="h5-style">Get Work Done</h5>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum
        velit mollitia dolorem facilis suscipit cumque  </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
              <div className="rounded shadow text-center p-3 me-3 ms-3 box-style">
                <h5 className="h5-style">Publish a project</h5>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatum
        velit mollitia dolorem facilis suscipit cumque </p>               </div>
            </div>

          </div>

        </div>  

        <Footer />


    </>
    
  )
}

export default Home