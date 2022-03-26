import axios from "axios";


export function Register(data, type) {
    axios.post(`http://127.0.0.1:8000/api/users/${type}-register`, data, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }})
    .then(response => console.log(response))
    .catch(err => {
        console.log('hhhh',err);
        
    })
};
