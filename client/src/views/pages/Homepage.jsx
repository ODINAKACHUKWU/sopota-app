import React, { Fragment } from "react";
import Header from "../components/containers/Header.jsx";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <h3 className="d-flex justify-content-start mt-5 mb-4">
          Welcome to Sopota
        </h3>
      </div>
    </Fragment>
  );
};

export default HomePage;
