import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: mrirtizaa@gmail.com</p>
          <p>Phone: (+92) 347-3116844</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected on social media:</p>
          <div className="social-icons">
            {/* Replace social media icons with text links */}
            <a href="https://wa.me/923473116844" target="_blank" rel="noopener noreferrer">
  WhatsApp
</a>


            <a href="https://x.com/IrtizaXyz?t=Tnm5NjzJI3WfaPPutov-8g&s=09" target="_blank" rel="noopener noreferrer">
             X (Twitter)
            </a>
            {/* Add more social media text links as needed */}
          </div>
        </div>

      

        <div className="footer-section">
          <h3>Support</h3>
          <p>For support inquiries, email mrirtizaa@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
  <p>Developed with <span className="heart-icon">&#10084;</span> By Irtiza</p>
  <p>&copy; 2023 IrtizaMediCare. All rights reserved.</p>

</div>
    </footer>
  );
}

export default Footer;
