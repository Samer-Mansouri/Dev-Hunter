import React from 'react'
import Navbar from '../Layouts/Navbar'
import Signup from './Signup/Signup'
//import Back from '../Assets/Images/bckgrrnd.png'
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom'
import logo from '../Assets/Images/ezyZip/freelancitn-logos_black.png';
import back from '../Assets/Images/ezyZip/bckgrnd.png';
import back1 from '../Assets/Images/ezyZip/Wavy_Edu-02_Single-05.jpg';
import l1 from '../Assets/Images/ezyZip/5154267.jpg';
import l2 from '../Assets/Images/ezyZip/20943921.jpg';
import l3 from '../Assets/Images/ezyZip/20945382.jpg';
import l4 from '../Assets/Images/ezyZip/20945597.jpg';

function Home1() {

  return (
    <>
    <div className='superMain'>
       <div className="main" >
           <nav className="nav-main">
               <div className="logo">
               <img src={logo}  />
               </div>
               <div className="nav">
               
            <NavLink className="nav-link" to="/">Home</NavLink>
          
            <NavLink className="nav-link" to="/projects">Explore</NavLink>
         
            <NavLink className="nav-link" to="/inscription">Sign in</NavLink>
          
            <NavLink className="nav-link" to="/connexion">Sign up</NavLink>
          
               </div>
               <div className="settings">
               <div className='not'>
               
                   </div>
                 <div className='test'></div>
               </div>
           </nav>
           <div className="content">
           <div className="backgound">
           <img src={back} className="w-100" />
              
               
           </div>
        <div className="backtext">
                <div className="text">
                    <h1>Welcome to freelanci.tn</h1>
                    <p>Where your expectations meet reality</p>
                </div>
                <img src={back1}  />
        </div>
        </div>
        
       </div>
          <div className='info'>
            <div className='info-messsage'>
              <div className='cercle'>
              </div>
              <p>Our Community is some mumbers</p>
            </div>
          </div>
          <div className='our'>
            <div className='our-com'>
              <div className='our-items'>
                
              </div>
            </div>
          </div>




          <div className='info'>
          <div className='info-messsage'>
              <div className='cercle'>
              </div>
              <p>Our Community is some mumbers</p>
            </div>
          </div>
          <div className='ser'>
            <div className='ser-com'>
              <div className='ser-items'>
                  <div className='service'>
                    <img src={l1} className="w-30" />
                    <div className='service-text'>blabla</div>
                  </div>
              </div>

              <div className='ser-items'>
                  <div className='service'>
                  <img src={l1} className="w-30" />
                    <div className='service-text'>blabla</div>
                  </div>
              </div>

              <div className='ser-items'>
                  <div className='service'>
                  <img src={l1} className="w-30" />
                    <div className='service-text'>lllll</div>
                  </div>
              </div>
              <div className='ser-items'>
                  <div className='service'>
                  <img src={l1} className="w-30" />
                    <div className='service-text'>llll</div>
                  </div>
              </div>
            </div>
          </div>


       </div>

    </>
    
  )
}

export default Home1