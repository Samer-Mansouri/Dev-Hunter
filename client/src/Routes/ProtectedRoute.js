import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const ProtectedRoute = ({ component: Component, ...rest}) => {
  


  return (

     <Route
     {...rest}
     render={
       props => {
        if(localStorage.getItem("refreshToken")){
          return <Component {...props} />
        }
        else {
          return <Redirect to={{
            pathname: "/connexion",
            state: {
              from: props.location
            }
          }}
          />
        }
       }
     }
    />
   
  
  );
}

export default ProtectedRoute;