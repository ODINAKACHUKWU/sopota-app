import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const TicketSeclectionCard = ({
  iconBg,
  icon,
  title,
  department,
  buttonClass,
}) => {
  return (
    <div className="card shadow" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div
          id={iconBg}
          className="col-md-4 d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon className="card-img" icon={icon} size="5x" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title mb-4">{title}</h3>
            <p className="card-text">
              Please direct your request to the{" "}
              <span className="font-weight-bold">{department}</span> to enable
              us serve you better.
            </p>
            <Link to="/request" className={buttonClass}>
              Submit a request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSeclectionCard;
