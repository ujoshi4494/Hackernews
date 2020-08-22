import React from "react";
import SpinnerImg from "../utils/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={SpinnerImg}
      alt='Loading...'
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  );
};

export default Spinner;
