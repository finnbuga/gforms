import React from "react";

import "./style.css";

const nav = [
  { name: "What we do", href: "/" },
  { name: "Advantages", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "How it works", href: "/" },
];

const Header = () => (
  <header id="app-header">
    <div id="app-header-inner" className="container">
      <a href="/" id="logo">
        LOGO
      </a>

      <nav id="main-nav">
        <ul>
          {nav.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button id="save-button">Save and exit</button>
    </div>
  </header>
);

export default Header;
