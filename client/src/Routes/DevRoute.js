import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export const DevRoute = ({ component: Component, ...rest}) => {
  


  return (

     <Route
     {...rest}
     render={
       props => {
        if(localStorage.getItem("refreshToken") && localStorage.getItem("role") == "dev"){
          return <Component {...props} />
        }
        else {
          return <Redirect to={{
            pathname: "/",
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

export default DevRoute;