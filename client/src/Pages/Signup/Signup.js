import React from 'react'
import InscriptionForm from './InscriptionForm'
import signup from './signup.jpg';

function Signup() {
  return (
    <div className="container border shadow mt-3 pt-2 pb-3">
        <div className="row">
            <div className="col-lg-6 col-md-12">
              <InscriptionForm />
            </div>

            <div className="col-6 d-lg-block d-md-none d-sm-none d-xs-none">
                <img src={signup} alt="signup" className="w-100" />
            </div>
        </div>
    </div>
  )
}

export default Signup