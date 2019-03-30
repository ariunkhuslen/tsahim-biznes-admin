import { compose } from "react-komposer";
import Product from "../pages/Homepage";
import React from "react";
import Loader from "react-loader-spinner";
const options = {
  loadingHandler: () => (
    <div className="page-loader">
      <Loader type="Triangle" color="#d3363d" />
    </div>
  ),
  errorHandler: err => <p style={{ color: "red" }}>{err.message}</p>
};

const fetch = async (props, onData) => {
  try {
    onData(null, {
      container: {
        weather: "weather"
      }
    });
  } catch (e) {
    console.log("CUSTOM ERROR: ");
    console.log(e);
  }
};

const dataLoader = (props, onData) => {
  fetch(props, onData);
};

export default compose(
  dataLoader,
  options
)(Product);
