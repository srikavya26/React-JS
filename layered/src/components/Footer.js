import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
            </div>
            <div className="footer__help">
                <h3>Help</h3>
                <ul>
                    <li><a href="/faq">FAQs</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>

                    <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li> <li><a href="/faq">FAQs</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
