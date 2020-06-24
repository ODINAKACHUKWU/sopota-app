import React from "react";
import {
  faExclamationTriangle,
  faQuestionCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import TicketSelectionCard from "../elements/TicketSelectionCard";

const CustomerInterface = ({ greeting }) => {
  return (
    <div>
      <h2 className="mb-5">{greeting}! How may we help you?</h2>
      <div className="row mb-5">
        <div className="col-md-6">
          <TicketSelectionCard
            iconBg="danger-icon-bg"
            icon={faExclamationTriangle}
            title="I have an issue"
            department="Support/Customer care department"
            buttonClass="btn btn-danger"
          ></TicketSelectionCard>
        </div>
        <div className="col-md-6">
          <TicketSelectionCard
            iconBg="info-icon-bg"
            icon={faQuestionCircle}
            title="I need a guide"
            department="IT/Technical department"
            buttonClass="btn btn-info"
          ></TicketSelectionCard>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <TicketSelectionCard
            iconBg="warning-icon-bg"
            icon={faShoppingCart}
            title="I need a product"
            department="Sales/Marketing department"
            buttonClass="btn btn-warning"
          ></TicketSelectionCard>
        </div>
      </div>
    </div>
  );
};

export default CustomerInterface;
