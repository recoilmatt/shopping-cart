import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="row">
      <div class="column">
        <span className="column-title">About</span>
        <ul>
          <li>
            <Link to="/">Press</Link>
          </li>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Stores</Link>
          </li>
        </ul>
      </div>
      <div class="column">
        <span className="column-title">Customer Service</span>
        <ul>
          <li>
            <Link to="/">Help</Link>
          </li>
          <li>
            <Link to="/">Call</Link>
          </li>
          <li>
            <Link to="/">Orders</Link>
          </li>
        </ul>
      </div>
      <div class="column">
        <span className="column-title">Contact Us</span>
        <ul>
          <li>
            <Link to="/">(134)548-5851</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
