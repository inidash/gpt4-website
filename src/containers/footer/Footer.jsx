import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others?</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request early access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>crenchtawod K12 182 DK, Texas. all rights reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counter</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>crenchtawod K12 182 DK, Texas.</p>
          <p>+1 323 444 5</p>
          <p>www.gpt3.com</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>c 2023 gpt3, all rights reserved!</p>
      </div>
    </div>
  )
}

export default Footer