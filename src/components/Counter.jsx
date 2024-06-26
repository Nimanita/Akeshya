import React from 'react';

import './styles/counter-style.css';
import './styles/fonts/remixicon/remixicon.css'
import './styles/font.css';
import Countsimg from '../components/media/counts-img.svg';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function Counter() {
      
       return (<section id="counts" class="counts">
       <div class="container">
 
         <div class="row">
           <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
             <img src={Countsimg.src} alt="" class="img-fluid"/>
           </div>
 
           <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
             <div class="content d-flex flex-column justify-content-center">
               <div class="row">
                 <div class="col-md-6 d-md-flex align-items-md-stretch">
                   <div class="count-box">
                     <i class="bi bi-emoji-smile"></i>
                     <span data-purecounter-start="0" data-purecounter-end="3835039" data-purecounter-duration="2" class="purecounter"></span>
                     <p><strong>Organic Reach</strong> (Global)</p>
                   </div>
                 </div>
 
                 <div class="col-md-6 d-md-flex align-items-md-stretch">
                   <div class="count-box">
                     <i class="bi bi-journal-richtext"></i>
                     <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="3" class="purecounter"></span>
                     <p><strong>Campaigns</strong></p>
                   </div>
                 </div>
 
                 <div class="col-md-6 d-md-flex align-items-md-stretch">
                   <div class="count-box">
                     <i class="bi bi-clock"></i>
                     <span data-purecounter-start="0" data-purecounter-end="14081" data-purecounter-duration="3" class="purecounter"></span>
                     <p><strong>Watch Hours</strong> (Asia) </p>
                   </div>
                 </div>
 
                 <div class="col-md-6 d-md-flex align-items-md-stretch">
                   <div class="count-box">
                     <i class="bi bi-globe"></i>
                     <span data-purecounter-start="0" data-purecounter-end="17" data-purecounter-duration="1" class="purecounter"><p>%</p></span>
                     <p><strong>Excellent CTR %</strong> (Asia)</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
 
       </div>
     </section>)
  }
  
  export default Counter;
  