import React, {useState} from 'react'
//import { Register } from '../../Api/Register'
import swal from 'sweetalert2';
import axios from 'axios'
function InscriptionForm() {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [password2, setPassword2] = useState('')
    const [username, setUsername] = useState('') 
    const [phoneNumber, setPhoneNumber] = useState('')
    const [type, setType] = useState('dev')


    const [firstNameErr, setFirstNameErr] = useState(false)
    const [lastNameErr, setLastNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [passwordMismatchErr, setPasswordMismatchErr] = useState(false);
    const [usernameErr, setUsernameErr] = useState(false);
    const [phoneNumberErr, setPhoneNumberErr] = useState(false);
    const [created, setCreated] = useState(false);
    const handleFirstName = e => {
        setFirstName(e.target.value)

        }

        const handleLastName = e => {
        setLastName(e.target.value)
        }

        const handleUsername = e => {
        setUsername(e.target.value)
        }

        const handleEmail = e => {
        setEmail(e.target.value)
        }

        const handlePassword = e => {
        setPassword(e.target.value)
        }

        const handlePassword2 = e => {
        setPassword2(e.target.value)
        }

        const handlePhoneNumber = e => {
            setPhoneNumber(e.target.value)
        }

        const handleType = e => {
            setType(e.target.value);
            console.log(e.target.value)
        }

        const Register = (data, type) => {
            axios.post(`http://127.0.0.1:8000/api/users/${type}-register`, data, {
                headers: {
                  // Overwrite Axios's automatically set Content-Type
                  'Content-Type': 'application/json'
                }})
            .then(response =>{
                new swal("Account created successfully")
                setEmail('')
                setFirstName('')
                setLastName('')
                setPassword('')
                setPassword('')
                setPhoneNumber('')
                setUsername('')
            setCreated(true)
            })
            .catch(err => {
                console.log(err);
                
            })
        };
        

    const handleSubmit = (e) => {
        if(firstName.length == 0 || !firstName.match('[a-zA-Z]+')){
            setFirstNameErr(true);
        }

        if(lastName.length == 0 || !lastName.match('[a-zA-Z]+')){
            setLastNameErr(true);
        }

        if(email.length == 0 || !email.toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            setEmailErr(true);
        }

        if(phoneNumber.length == 0 || !phoneNumber.match('[0-9]+')){
            setPhoneNumberErr(true)
        }

        if(username.length == 0 || username.match('[a-zA-Z0-9]+'))
        
        console.log(type)
        e.preventDefault();
       // console.log(firstName, lastName, email, username, phoneNumber, password, password2)
     
       if(type == 'client'){
            var data = {
                email: email,
                username: username,
                first_name: firstName,
                last_name: lastName,
                password: password,
                password2: password2,
                client: {
                    phone_number: phoneNumber,
                }            
            }
        } else {
            var data = {
                email: email,
                username: username,
                first_name: firstName,
                last_name: lastName,
                password: password,
                password2: password2,
                dev: {
                    phone_number: phoneNumber,
                }            
            }
        }

        
       
        Register(data, type)
    }
  return (
    <>
    <form className="row g-3 mt-5" onSubmit={handleSubmit} >
    
        <h2 className="text-center mt-5">Inscription</h2>
        <div className="form-floating">
            <input id="first_name" type="text"
                value={firstName} onChange={handleFirstName}
            name="first_name" className="form-control"  id="floatingInputValue"  />
            <label htmlFor="floatingTextarea">Prénom</label>
            {firstNameErr ? <p className="text-danger">Prénom non valide</p> : ''}
        </div>

        <div className="form-floating w-100">
            <input id="last_name" type="text"
                value={lastName} onChange={handleLastName}
            name="last_name" className="form-control"  id="floatingInputValue"  />
            <label htmlFor="floatingTextarea">Nom</label>
            {lastNameErr ? <p className="text-danger">Nom non valide</p> : ''}
        </div>

        <div className="form-floating">
            <input id="email" type="text" 
                value={email} onChange={handleEmail}
            name="email" className="form-control"  id="floatingInputValue"  />
            <label htmlFor="floatingTextarea">Email</label>
            {emailErr ? <p className="text-danger">Adresse E-mail non valide</p> : ''}

        </div>

        <div className="form-floating">
            <input id="username" type="text"
                value={username} onChange={handleUsername}
            name="username" className="form-control"  id="floatingInputValue"  />
            <label htmlFor="floatingTextarea">Nom d'utilisateur</label>
            {usernameErr ? <p className="text-danger">Nom d'utilisateur nom valide</p> : ''}

        </div>

        <div className="form-floating">
            <input id="phone_number" type="text"
                value={phoneNumber} onChange={handlePhoneNumber}
            name="phone_number" className="form-control"  id="floatingInputValue" defaultValue={""} />
            <label htmlFor="floatingTextarea">Numéro de téléphone</label>
            {phoneNumberErr ? <p className="text-danger">Numéro de téléphone non valide</p> : ''}

        </div>

        <div className="col-sm-3">
        <label className="visually-hidden" htmlFor="specificSizeSelect">Account type</label>
        <select className="form-select" id="specificSizeSelect" onChange={handleType}>
          <option selected value="dev">Developer</option>
          <option value="client">Client</option>
        </select>
      </div>

        <div className="form-floating">
            <input id="password1" type="password"
                value={password} onChange={handlePassword}
            name="password" className="form-control"  id="floatingInputValue" />
            <label htmlFor="floatingTextarea">Mot de passe</label>
        </div>

        <div className="form-floating">
            <input id="password1" type="password"
                value={password2} onChange={handlePassword2}
            name="password2" className="form-control"  id="floatingInputValue"  />
            <label htmlFor="floatingTextarea">Confirmer votre mot de passe</label>
        </div>



        <div className="form-group">
            <button className="btn w-100 pt-2 pb-2" id="my-butt" type="submit">S'inscrire</button>
        </div>
      </form>
    </>
    
  )
}

export default InscriptionForm