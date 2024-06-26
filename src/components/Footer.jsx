import React from 'react';
import './styles/footer-style.css';
import {useState} from 'react';

function Footer() {
    let copyright = String.fromCodePoint(0x00A9);
       return (
        <section id="footersection" class="footersection">
        <footer id="footer">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="Copyright">{copyright} Copyright <strong>Akeshya</strong>. All Rights Reserved
        </div>
        <div>
          <ul class=" d-flex list-unstyled">
            <li class="px-3"><a href="./Terms and conditions.pdf">Terms and conditions</a></li>
            <li class="px-3"><a href="./Refund policy.pdf">Refund policy</a></li>
            <li class="px-3"><a href="./Privacy policy.pdf">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


      </section>
    );
  }
  
  export default Footer;
  