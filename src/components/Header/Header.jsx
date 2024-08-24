import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/Logo.svg';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logoContainer}>
        <Logo />
      </div>
      <nav className={css.navigation}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link to="/" className={css.navLink}>Domy</Link>
          </li>
          <li className={css.navItem}>
            <Link to="/technika" className={css.navLink}>Sprzęt budowlany</Link>
          </li>
          <li className={css.navItem}>
            <Link to="/kariera" className={css.navLink}>Kariera</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
