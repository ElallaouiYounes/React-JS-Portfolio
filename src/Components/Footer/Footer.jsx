import React from 'react'
import './Footer.css'
import user from '../../assets/user.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-section">
      <div className="footer-left">
            <div className="logo">Younes</div>
                <p>▪️ I'm a web full stack developer from, Morocco with more than two years of experience in the field. </p>
            </div>
            <div className="footer-right">
                <div className="email-field">
                <label htmlFor="kolip"><img src={user} /></label>
                <input type="text" placeholder='Enter your email' id='kolip'/>
                </div>
                <div className='subscribe'>
                    <p>Subscribe</p>
                </div>
            </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2024 Younes Elallaoui. All rights reserved.</p>
        <div className="under-left">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer