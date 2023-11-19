import React from "react";

function Content() {
  return (
    <div className="container">
      <div className="content">
        <div className="content-left">
          <span>Your Exclusive Offer</span>
          <p>
            Row House is committed to helping you start a rowing-based fitness
            routine that will improve your health and deliver unparalleled
            results. Move better, feel better and live better through Row House.{" "}
          </p>
        </div>
        <div className="content-right">
          <span>FIRST CLASS FREE</span>
          <p>*Available at Participating Studios.</p>
          <label>First name</label>
          <input type="text" placeholder="First name" />
          <label>Last name</label>
          <input type="text" placeholder="Last name" />
          <label>Email</label>
          <input type="text" placeholder="Email" />
          <label>Phone number</label>
          <input type="text" placeholder="Phone number" />
        </div>
      </div>
    </div>
  );
}

export default Content;
