import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <ul style={style}>
        <li>
          <a href=''>HackerNews</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
        <li style={{ float: "right" }}>
          <a href=''>Login</a>
        </li>
      </ul>
    </Fragment>
  );
};

const style = {};

export default Navbar;
