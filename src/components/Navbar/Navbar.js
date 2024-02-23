
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  

  return (
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">

      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <ul class="nav navbar-nav ">
      <li class="navbar-brand" ><Link to="/" id="ddd">SAMSUNG</Link></li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="mynavbar">

    <ul class="nav navbar-nav">
      <li ><Link to="/">HOME</Link></li>
      <li><Link to='/Mobile'>MOBILE</Link></li>
      <li><Link to='/Laptop'>LAPTOP</Link></li>
      <li><Link to="/Tab">TAB</Link></li>
      <li><Link to="/Watchs">WATCHE</Link></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
     
      <li><Link to="/Sign_in"><span class="glyphicon glyphicon-user">SIGNIN</span></Link></li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navbar;
