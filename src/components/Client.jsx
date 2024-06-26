import React from 'react';

import './styles/client-style.css';
import './styles/font.css';
import {useState , useEffect} from 'react';
import Client1 from '../components/media/client-1.png';
import Client2 from '../components/media/client-2.png';
import Client3 from '../components/media/client-3.png';
import Client4 from '../components/media/client-4.png';
import Client5 from '../components/media/client-5.png';
import Client6 from '../components/media/client-6.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Client() {
      
       return (
        <section id="client" class = "client">
   
  
      <div class="container">

        <div class="row">

          <div class="col-lg-2 col-md-4 col-6">
            <img src={Client1.src} class="img-fluid" alt="" data-aos="zoom-in"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={Client2.src} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={Client3.src} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={Client4.src} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={Client5.src} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400"/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={Client6.src} class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500"/>
          </div>

        </div>

      </div>
    
      </section>
    );
  }
  
  export default Client;
  