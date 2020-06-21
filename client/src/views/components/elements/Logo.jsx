import React from "react";

import logo from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="d-flex">
      <div>
        <img
          className="shadow-lg mr-2"
          src={logo}
          width="40"
          alt="sopota-icon"
        />
      </div>
      <div className="text-white">
        <h2>Sopota</h2>
      </div>
    </div>
  );
};

export default Logo;
