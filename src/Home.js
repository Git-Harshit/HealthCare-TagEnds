import fire from './congif';
import React, { Component,useState } from 'react';
import { Button } from 'react-bootstrap';
import Login from './Login';
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

function Home() {
 
  const logout=()=>{
    fire.auth().signOut(); 
 }
  
  
  return (
    <div className="App">
      
     
              <div className="logout"><Link to="/"><button onClick={logout()} className="btn-success btn">Logout</button></Link> </div> 
              
    </div>
  );
}

export default Home;