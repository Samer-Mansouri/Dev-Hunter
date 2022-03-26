import React from 'react';
import { BrowserRouter as BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import Navbar from './Layouts/Navbar';
import Main from './Pages/Freelancer/Main';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Offre from './Pages/Offre/Offre';
import Surf from './Pages/Surf/Surf';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import ProtectedRoute from './Routes/ProtectedRoute';
import PublicRoute from './Routes/PublicRoute';
import PostsList from './Pages/Posts/PostsList';
import Logout from './Components/Logout';
import SingleProject from './Pages/Posts/SingleProject';
import Profile from './Pages/Profile/Profile';
import MessagesList from './Pages/Messages/MessagesList';
import AuthRoute from './Routes/AuthRoute';
import NotFound from './Components/NotFound';
import DevRoute from './Routes/DevRoute';
import Footer from './Layouts/Footer';
const App = () => {
  return (
    <>
    <BrowserRouter> 
      
    
<PublicRoute path="/h" component={Home2} />
    <Navbar />
    <Switch>
    
    <PublicRoute  exact path="/" component={Home} />
    
    <AuthRoute path="/inscription" component={Signup} />
    <AuthRoute path="/connexion" component={Signin} />
    <PublicRoute path="/offre" component={Offre} /> 
    <PublicRoute path="/surf" component={Surf} /> 
    <PublicRoute path="/projects" component={PostsList} /> 
    <ProtectedRoute path="/accueil" component={Main} />
    <ProtectedRoute path="/logout" component={Logout} />
    <PublicRoute path="/project/:id" component={SingleProject} />
    <PublicRoute path="/profile/:id" component={Profile} />
    <DevRoute path="/messages" component={MessagesList} />
    <Route path="*" component={NotFound} />
    </Switch>  
    </BrowserRouter>
    </>
  );
}

export default App;
