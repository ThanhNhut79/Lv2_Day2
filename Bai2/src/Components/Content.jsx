import React from "react";
import locationLogo from "/icons8-location-50.png";
function Content() {
  return (
    <div className="container">
      <div className="content">
        <div className="content-left">
          <span>YOUR EXCLUSIVE OFFER</span>
          <p>
            Row House is committed to helping you start a rowing-based fitness
            routine that will improve your health and deliver unparalleled
            results. Move better, feel better and live better through Row House.{" "}
          </p>
        </div>
        <div className="content-right">
          <span>FIRST CLASS FREE</span>
          <p>*Available at Participating Studios.</p>
          <div className="location-content">
            <div className="location-left">
              <img src={locationLogo} alt="" />
            </div>
            <div className="location-right">
              <a>Your location</a>
              <select id="location">
                <option value="volvo">Chealse</option>
                <option value="saab">Tustin</option>
                <option value="vw">Hilton HeadW</option>
                <option value="vw">North Hills</option>
                <option value="vw">College Station</option>
                <option value="audi" selected>
                  Chealse
                </option>
              </select>
              <p>Change City or Zip Code</p>
            </div>
          </div>
          <label>First name</label>
          <input type="text" placeholder="First name" />
          <label>Last name</label>
          <input type="text" placeholder="Last name" />
          <label>Email</label>
          <input type="text" placeholder="Email" />
          <label>Phone number</label>
          <input type="text" placeholder="Phone number" />
          <p>
            By clicking “Try Row House,” you agree to our Terms and to receive
            automated marketing calls or texts from or on behalf of Row House at
            the phone number provided above. Consent is not a condition of
            purchase. Message and data rates may apply.
          </p>
          <button>TRY ROW HOUSE</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
