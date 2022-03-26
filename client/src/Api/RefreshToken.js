export function refreshAccessToken (callback) {
    let refreshToken = localStorage.getItem("refreshToken");
    fetch('http://127.0.0.1:8000/api/users/token/refresh/', {
        method: 'POST',
        body: JSON.stringify({
          refresh: refreshToken,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(res =>{
        if(res.ok){
          console.log('Success');
          console.log(typeof(res))
          console.log(res)
        }else{
          console.log('Not success');
        }
        return res.json()
      }).then(data => {
        console.log(data.access)
        localStorage.setItem('accessToken', data.access)
      }).then(callback())
      
  }

  export function refreshAccessTokenForElementsWithId (callback) {
    let refreshToken = localStorage.getItem("refreshToken");
    fetch('http://127.0.0.1:8000/api/users/token/refresh/', {
        method: 'POST',
        body: JSON.stringify({
          refresh: refreshToken,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(res =>{
        if(res.ok){
          console.log('Success');
          console.log(typeof(res))
          console.log(res)
        }else{
          console.log('Not success');
        }
        return res.json()
      }).then(data => {
        console.log(data.access)
        localStorage.setItem('accessToken', data.access)
      }).then(callback(arguments[1]))
      
  }