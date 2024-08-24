import React from 'react';
import { NavLink  } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/Logo.svg';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <nav className={css.navigation}>
        <div  className={css.navList}>
            <NavLink  to="/" className={css.navLink}>Domy</NavLink>
            <NavLink  to="/technika" className={css.navLink}>Sprzęt budowlany</NavLink>
            <NavLink  to="/kariera" className={css.navLink}>Kariera</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
