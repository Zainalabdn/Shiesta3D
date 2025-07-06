import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactGA from "react-ga4";
import LogoWhite from "../assets/ShiestaWhite.svg";
import "../styles/Footer.css";

function Footer() {
  // Fungsi tracking klik ikon media sosial
  const handleSocialClick = (platform) => {
    ReactGA.event({
      category: "Social Media",
      action: `Clicked ${platform} Icon`,
      label: "Footer"});
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={LogoWhite} alt="Shiesta Logo" />
      </div>

      <div className="footer-text">
        <p>
          Cetak tanpa batas, dengan kualitas yang bisa diandalkan. Detail halus, hasil rapi karena setiap ide layak diwujudkan dengan sempurna.
        </p>
      </div>

      <div className="footer-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleSocialClick("Facebook")}
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/shiesta3dprinting?igsh=MW5ueTVzZDMwZ2Q1MA=="
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleSocialClick("Instagram")}
        >
          <InstagramIcon />
        </a>
        <a
          href="https://wa.me/6281578975317"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleSocialClick("WhatsApp")}
        >
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;