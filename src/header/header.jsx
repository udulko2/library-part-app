import { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from './assets/avatar.jpg'
import './header.css'
import { ReactComponent as BurgerIcon } from './assets/burger-icon.svg';
import { ReactComponent as ArrowLinearGradientDef } from './assets/arrow-linear-gradient-def.svg'
import { Navigation } from '../components/navigation';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <ArrowLinearGradientDef />
      <div className="container">
        <div className="header__inner">
          <BurgerIcon className={`burger-icon ${open ? 'burger-icon-transform' : ''}`} onClick={() => setOpen(!open)} data-test-id='button-burger' />
          <div className="lib-person-wrapper">
            <h1 className="lib-title"><Link to="/">Библиотека</Link></h1>
            <div className="person">
              <span className="person__name">Привет, Иван!</span>
              <img className="person__avatar" src={avatar} alt="person avatar img" />
            </div>
          </div>
        </div>
        <div className='burger-nav'>
          <Navigation burgerOpen={open} testData='burger' />
        </div>
      </div>
    </header>
  )
};
