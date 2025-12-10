import React from "react";
import "../styles/footer.css";
import logo from "../assets/cow-cartoon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} className="footer-logo" alt="Dairy Delight" />
        <h2>Dairy Delight</h2>
        <p>Fresh • Organic • Farm to Home</p>
      </div>

      <div className="footer-links">
        <p>Privacy Policy</p>
        <p>Terms</p>
        <p>Support</p>
      </div>

      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Email: support@dairydelight.com</p>
        <p>Phone: +91 9876543210</p>
      </div>

      <div className="footer-bottom">
        © 2025 Dairy Delight. All rights reserved.
      </div>
    </footer>
  );
}
