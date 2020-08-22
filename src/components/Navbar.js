import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to='/'>HackerNews</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li style={{ float: "right" }}>
          <a href=''>Login</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
