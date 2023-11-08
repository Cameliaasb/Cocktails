import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li> Cocktails </li>
        </NavLink>
        {/* <NavLink to="/mybar">
          <li> My Bar </li>
        </NavLink> */}
      </ul>
    </div>
  );
};

export default Navigation;
