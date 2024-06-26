import React from 'react';

import './styles/contact-style.css';
import './styles/font.css';
import 'aos/dist/aos.css';

function Contact() {
      
       return (
        <section id="contact" class="contact">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="contact-about">
              <h3>Akeshya</h3>
              <p>Designers, developers  &  marketeers capable of delivering solutions according to your needs,</p>
              
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
            <div class="info">
              <div>
                 <i class="ri-map-pin-line"></i>
                <p>26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
              </div>

              <div>
                <i class="ri-mail-send-line"></i>
                <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="244d4a424b64454f41574c5d450a474b49">[mamatasingh2507@gmail.com]</a></p>
              </div>

              <div>
                <i class="ri-phone-line"></i>
                <p>+91 94942 40922 </p>
              </div>

            </div>
          </div>

       
             <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            <form class='php-email-form' method='POST' name='contact'><input type='hidden' name='form-name' value='contact' />
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>


        </div>

      </div>
    </section>
    );
  }
  
  export default Contact;