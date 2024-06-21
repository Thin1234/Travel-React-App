import React from 'react';
import Button from './Button';
import './Footer.css'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
        <section className='footer-subscription'>
         <p className='footer-subscripton-heading'>Join the Adventure newsletter to receive our best vacation deals</p>
         <div className='footer-subscription-text'>
            <form>
              <input type='email' name="email" placeholder='Your Email' className="footer-input"/>
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <NavLink to='/sign-up'>How it works</NavLink >
            <NavLink  to='/'>Testimonials</NavLink>
            <NavLink  to='/'>Careers</NavLink >
            <NavLink  to='/'>Investors</NavLink >
            <NavLink  to='/'>Terms of Service</NavLink >
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <NavLink  to='/'>Contact</NavLink >
            <NavLink  to='/'>Support</NavLink >
            <NavLink  to='/'>Destinations</NavLink >
            <NavLink  to='/'>Sponsorships</NavLink >
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <NavLink  to='/'>Submit Video</NavLink >
            <NavLink  to='/'>Ambassadors</NavLink >
            <NavLink  to='/'>Agency</NavLink >
            <NavLink  to='/'>Influencer</NavLink >
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <NavLink  to='/'>Instagram</NavLink >
            <NavLink  to='/'>Facebook</NavLink >
            <NavLink  to='/'>Youtube</NavLink >
            <NavLink  to='/'>Twitter</NavLink >
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <NavLink className="social-logo">
              TRVL <i className="fab fa-typo3"/>
            </NavLink>
          </div>
          <small className='website-rights'>TRVL</small>
          <div className="social-icons">
            <NavLink className="social-icon-link facebook"
            to='/'
            target="_blank"
            aria-label='Facebook'>
            </NavLink>
            <NavLink className="social-icon-link facebook"
            to='/'
            target="_blank"
            aria-label='Facebook'>
            </NavLink>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Footer;
