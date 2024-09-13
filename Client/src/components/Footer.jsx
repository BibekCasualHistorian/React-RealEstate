import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-left">
            <h1>Homyz</h1>
            <p>Our vision is to make all people <br /> the best place to live for them.</p>
        </div>
        <div className="footer-right">
            <h1>Information</h1>
            <address>145 New York, FL 5467, USA</address>
            <ul className="footer-right-links">
                <li>Property</li>
                <li>Services</li>
                <li>Products</li>
                <li>About Us</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer