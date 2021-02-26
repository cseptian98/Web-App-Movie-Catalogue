import React from 'react';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/movies.png')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/discover' activeStyle>
            Discover
          </NavLink>
          <NavLink to='/library' activeStyle>
            Library
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
