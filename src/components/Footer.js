import React from 'react';
 // Assuming you will add custom styles in Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-logo">
            <h2>SmartEstate</h2>
          </div>
          <p className="footer-description">
            The world's first and largest digital real estate marketplace for  Investing, Trading, and Owning Property Fractionally with NFTs. Buy, sell, and discover exclusive digital items.
          </p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h3>Discover</h3>
          <ul className="footer-details">
          <li class="footer-details"><a href="#">Collection</a></li>
          <li class="footer-details"><a href="#">Search</a></li>
          <li class="footer-details"><a href="#">Author Profile</a></li>
          <li class="footer-details"><a href="#">NFT Details</a></li>
          <li class="footer-details"><a href="#">Account Setting</a></li>
          <li class="footer-details"><a href="#">Connect Wallet</a></li>
          <li class="footer-details"><a href="#">Blog</a></li>

          </ul>
        </div>

        {/* Help Center */}
        <div className="footer-right">
          <h3>Help Center</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Sign In</a></li>
            <li><a href="#">Subscription</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <h3>Subscribe</h3>
          <div className="subscribe-box">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
            />
            <button className="subscribe-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <p className="subscribe-description">
            Discover, collect, and sell extraordinary NFTs. OpenSea is the world's first and largest NFT marketplace.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;