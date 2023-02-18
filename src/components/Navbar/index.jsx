import * as React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-title page-padding">
        <h2>The Artifact</h2>
      </div>
      <div className="navbar-subtitle page-padding">
        <h4><em>Culture & Art Blog</em></h4>
      </div>
      <div className="navbar-links page-padding">
        <div className="navbar-links-items">Blog</div>
        <div className="navbar-links-items">About</div>
        <div className="navbar-links-items">Contact</div>
      </div>
    </div>
  );
}
