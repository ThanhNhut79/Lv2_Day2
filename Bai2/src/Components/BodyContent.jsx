import React from "react";
import linkedinLogo from "/linkedin.png";
import facebookLogo from "/facebook.png";
import instagramLogo from "/instagram.png";
import twitterLogo from "/twitter.png";
import buttonIcon from "/icons-next.png";

function BodyContent() {
  return (
    <div className="container">
      <div className="body-content">
        <div className="content-1">
          <span>
            DON'T MISS A BEAT. <br />
            SUBSCRIBE AND STAY CONNECTED
          </span>
        </div>
        <div className="content-2">
          <label>Email Address</label>
          <div className="text-input">
            <input type="text" />
            <button className="button-next-icon">
              <img src={buttonIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="content-3">
          <span>Follow us on Social</span>
          <div className="logo-contact">
            <img src={twitterLogo} alt="" />
            <img src={facebookLogo} alt="" />
            <img src={instagramLogo} alt="" />
            <img src={linkedinLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
