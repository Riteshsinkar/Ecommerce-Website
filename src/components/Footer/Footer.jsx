import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

const Fotter = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img style={{ width: "60px" }} src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <u className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </u>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img style={{ width: '25px' }} src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img style={{ width: '25px' }} src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img style={{ width: '25px' }} src={whatsapp_icon} alt="" />
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyroght @ 2025 - All Right Reserved.</p>
            </div>
        </div >
    )
}

export default Fotter