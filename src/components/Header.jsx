import React from 'react';
import Logo from '../components/media/logo.png';
import './styles/header-style.css';
import {useState} from 'react';

function Header() {
       return (
        <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
    
          <div class="logo">
            <h1><a href='/'><img src={Logo.src} alt="" class="img-fluid"/>AKESHYA</a></h1>
            
          </div>
    
          <nav id="navbar" class="navbar" >
            <ul>
              <li><a class="nav-link scrollto active" href="/">Home</a></li>
              <li><a class='nav-link scrollto' href="about">About</a></li>
              <li><a class="nav-link scrollto" href="services">Services</a></li>
              <li><a class='getstarted scrollto' href="contact">Contact us</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
            
          </nav>
    
        </div>
      </header>
    );
  }
  
  export default Header;
  