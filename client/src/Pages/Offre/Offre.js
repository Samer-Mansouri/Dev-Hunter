import React from 'react'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom'

function Offre() {

   
  
    return (
      <>
          
          <div className="offre">
            <nav className="nav-offre">
            <div className="search">
            <form>
            <FontAwesomeIcon icon={faSearch} />
             <label>
             
            
                <input placeholder='trouver des services' type="text" name="name" />
            </label>
            <input type="submit" value="Search" />
            </form>
            </div>
            </nav>
            <div className="container">
            <div className="trending">
            <h3>Trending</h3>

            <div className="trend-items">
              <div className="items">
              <NavLink className="items-cont" to="/">
                  <div className="test">
                    <img src="https://assets.entrepreneur.com/content/3x2/2000/20170921221322-GettyImages-515057138.jpeg" />
                    <div className="profile-cont">
                      <div className="profile-items">
                        <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                        <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                      </div>
                    </div>
                    <div className="project-def">
                        <h5>je veux creer un site web</h5>
                    </div>
                    <div className="project-rate">
                      5 etoile
                    </div>
                    <div className="project-add">
                      <div className="price">800dt</div>
                    </div>
                  </div>

              </NavLink>
                  
                </div>

                <div className="items">
                <NavLink className="items-cont" to="/">
                  <div className="test">
                  <img src="https://www.e-tribart.fr/blog/wp-content/uploads/2018/11/AdobeStock_171466899-1.jpeg" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
              </NavLink>
                </div>

                <div className="items">
                <NavLink className="items-cont" to="/">
                  <div className="test">
                  <img src="https://www.matc.edu/_files/img/program-page/it_web_and_software_developer_degree1.png" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
              </NavLink>
                </div>

                <div className="items">
                <NavLink className="items-cont" to="/">
                <div className="profile-cont">
                  <div className="profile-cont">
                  <div className="test">
                  <img src="https://observer.com/wp-content/uploads/sites/2/2016/03/160316-yetty004.jpg?quality=80&strip" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
              </NavLink>
                </div>
              <div>

            </div>
            </div>
            
            
          </div>




          <div className="trending">
            <h3>Développement Web</h3>

            <div className="trend-items">
              <div className="items">
              <NavLink className="items-cont" to="/">
                  <div className="test">
                  <img src="https://observer.com/wp-content/uploads/sites/2/2016/03/160316-yetty004.jpg?quality=80&strip" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
              </NavLink>
                  
                </div>

                <div className="items">
                <NavLink className="items-cont" to="/">
                  <div className="test">
                  <img src="https://www.e-tribart.fr/blog/wp-content/uploads/2018/11/AdobeStock_171466899-1.jpeg" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
              </NavLink>
                </div>

                <div className="items">
                <NavLink className="items-cont" to="/">
                  <div className="test">
                  <img src="https://assets.entrepreneur.com/content/3x2/2000/20170921221322-GettyImages-515057138.jpeg" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
              </NavLink>
                </div>

                <div className="items">
                <NavLink className="items-cont" to="/">
                  <div className="test">
                  <img src="https://www.matc.edu/_files/img/program-page/it_web_and_software_developer_degree1.png" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
              </NavLink>
                </div>
              <div>

            </div>
            </div>
            
            
          </div>

          <div className="trending">
            <h3>Devellopement Mobile</h3>

            <div className="trend-items">
              <div className="items">
              <NavLink className="items-cont" to="/">
                  <div className="test">
                  <img src="https://www.matc.edu/_files/img/program-page/it_web_and_software_developer_degree1.png" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
              </NavLink>
                  
                </div>

                <div className="items">
                <NavLink className="items-cont" to="/">
                  <div className="test">
                  <img src="https://www.e-tribart.fr/blog/wp-content/uploads/2018/11/AdobeStock_171466899-1.jpeg" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
              </NavLink>
                </div>

                <div className="items">
                <NavLink className="items-cont" to="/">
                  <div className="test">
                  <img src="https://observer.com/wp-content/uploads/sites/2/2016/03/160316-yetty004.jpg?quality=80&strip" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
              </NavLink>
                </div>

                <div className="items">
                <NavLink className="items-cont" to="/">
                  <div className="test">
                  <img src="https://assets.entrepreneur.com/content/3x2/2000/20170921221322-GettyImages-515057138.jpeg" />
                  <div className="profile-cont">
                  <div className="profile-items">
                    <img src='https://maphotoportrait.fr/918-thickbox_default/photo-reussie-de-profil-linkedin.jpg' />
                    <NavLink className="profile-link" to="/">Cherni Anass</NavLink>
                  </div>
                  </div>
                  </div>
              </NavLink>
                </div>
              <div>

            </div>
            </div>
            
            
          </div>


          </div>
          
          </div>
          
         
          
      </>
      
    )
  }
  
  export default Offre