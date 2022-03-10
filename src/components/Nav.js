import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import homebutton from '../utils/homebutton.png';
import menubutton from '../utils/3lines.png';
import userbutton from '../utils/usericon.png';
import ConnectWalletButton from './ConnectWalletButton';

function Nav() {
  return (
      <nav>
          <ul>
            <li>
              <Link to="/">
                <img src={homebutton} alt="Home Button" />
              </Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              <Link to="/wallet">
                <ConnectWalletButton/>
              </Link>
            </li>
            <li>
              <Link to="/user">
                <img src={userbutton} alt="User Button" />
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <img src={menubutton} alt="Menu Button" />
              </Link>
            </li>
          </ul>
      </nav>
  );
}

export default Nav;
