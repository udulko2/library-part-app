import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css'
import data from '../../data/categories.json'
import { ReactComponent as IconArrow } from './assets/arrow.svg';

export const Navigation = ({ burgerOpen, testData }) => {
  const [open, setOpen] = useState(true);
  const [subActive, setSubActive] = useState(false);
  const accordionContentRef = useRef(null);

  const subitemsMarkup = data.map(({ id, name }) => (
    <li className="nav-subitem" key={id}>
      <NavLink to={`/books/${id}`} className={({ isActive }) => isActive ? 'nav-sublink nav-sublink--active' : 'nav-sublink'} onClick={() => setSubActive(true)}>{name}</NavLink>
      <span>8</span></li>
  ))

  const handleNavItemClick = () => {
    setSubActive(false);
    setOpen(false);
  }

  return (
    <nav className={`nav ${burgerOpen ? 'nav-burger-open' : ''}`} data-test-id={`${testData}-navigation`}>
      <ul className="nav-list">
        <li className="nav-item">
          <div className="accordion-item">
            <div className="accordion-title">
              <NavLink to="/books/all" onClick={() => setOpen(!open)} className={({ isActive }) => (isActive || subActive) ? 'nav-link nav-link--showcase nav-link--underline nav-link--active' : 'nav-link nav-link--showcase'} data-test-id={`${testData}-showcase`}>
                <span>Витрина книг</span>
                <button className="accordion-button" type="button">
                  <IconArrow className={`icon-arrow ${open ? 'arrow-up' : 'arrow-down'}`} />
                </button>
              </NavLink>
            </div>
            <div ref={accordionContentRef} className={`accordion-content ${open ? '' : 'accordion-content-close'}`}>
              <ul className="nav-sublist">
                <li className="nav-subitem nav-subitem-all">
                  <NavLink to="/books/all" className={({ isActive }) => isActive ? 'nav-sublink nav-sublink--active' : 'nav-sublink'} onClick={() => setSubActive(true)} data-test-id={`${testData}-books`}>Все книги</NavLink>
                  <span>8</span></li>
                {subitemsMarkup}
              </ul>
            </div>
          </div>
        </li>
        <li className="nav-item nav-item-rules">
          <NavLink to="/rules"
            className={({ isActive }) => isActive ? 'nav-link nav-link--active nav-link--underline' : 'nav-link'} onClick={handleNavItemClick} data-test-id={`${testData}-terms`}>Правила пользования</NavLink>
        </li>
        <li className="nav-item nav-item-oferta">
          <NavLink to="/oferta"
            className={({ isActive }) => isActive ? 'nav-link nav-link--active nav-link--underline' : 'nav-link'} onClick={handleNavItemClick} data-test-id={`${testData}-contract`}>Договор оферты</NavLink>
        </li>
        <div className='nav-burger-extension'>
          <hr className="nav-horizontal-divider" />
          <li className='nav-item nav-item-profile'>
            <NavLink to="/profile" className='nav-link'>Профиль</NavLink>
          </li>
          <li className='nav-item nav-item-logout'>
            <NavLink to="/logout" className='nav-link'>Выход</NavLink>
          </li>
        </div>
      </ul>
    </nav>
  )
}
