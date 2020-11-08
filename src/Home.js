import fire from './congif';
import React, { Component,useState } from 'react';
import { Button } from 'react-bootstrap';
import Login from './Login';
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './css/Home.css';

function Home() {
 
  const logout=()=>{
    fire.auth().signOut(); 
  }
  
  let quoteElement = <div class="tagline-container m-auto"><h1 className="tagline">Health is a state of complete harmony of the body, mind and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open.</h1></div>;
  
  function PostCard (props) {
    return (
      <div className="card col-md-6 col-xl-3 p-2">
        <div className="post-item">
          <h4 className="posts-title">{props.postTitle}</h4>
          <p className="posts-description">{props.details}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App"> 
        <div className="logout btn btn-block">
          <Link to="/"><button onClick={logout()} className="btn-success btn">Log Out</button></Link> 
        </div>

        <div className="Featured">
          <quoteElement/>
          <div className="RecentPosts">
            <h3 className="PageHeading">Recent Posts</h3>
            <div className="PostsContainer row">
              <PostCard postTitle="Healthify your life, with right choices at the right time" details="With the right decision taken at the right time, your life can be upgraded for better." />
              <PostCard postTitle="Do you really eat what you see?" details="The greedy, dishonest mak=rket can take your health at stake. Make sure that your food is edible, as well as beneficial with these tips." />
              <PostCard postTitle="Post 3" details="Know more ..." />
              <PostCard postTitle="Post 4" details="Know more ..." />
            </div>  
          </div>
        </div>

    </div>
  );
}

export default Home;