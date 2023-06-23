import { useRef } from 'react';
import './filter-bar.css';
import iconSearch from './assets/icon-search.svg';
import iconClose from './assets/icon-close.svg';
import iconSort from './assets/icon-sort.svg';
import { ReactComponent as IconGrid } from './assets/icon-grid.svg';
import { ReactComponent as IconList } from './assets/icon-list.svg';

export const FilterBar = ({ isGrid, setGrid, setList }) => {
  const filterBarRef = useRef(null);
  const searchInputRef = useRef(null);

  function openButtonClick() {
    const rect = searchInputRef.current.getBoundingClientRect();
    
    if (rect.width <= 38) {
      filterBarRef.current.classList.add('filter-bar--modified');
    }
    searchInputRef.current.focus();
  }

  function closeButtonClick() {
    filterBarRef.current.classList.remove('filter-bar--modified');
  }

  return (
    <section ref={filterBarRef} className="filter-bar">
      <div className="filter">
        <div className='filter-bar-search-input-wrapper'>
          <button className='search-input-open-button' type='button' onClick={openButtonClick} data-test-id='button-search-open'><img src={iconSearch} alt="icon close" /></button>
          <input ref={searchInputRef} className="filter-bar__search-input" type="text" name="query" placeholder="Поиск книги или автора..." data-test-id='input-search' />
          <button className='search-input-close-button' type='button' onClick={closeButtonClick} data-test-id='button-search-close'><img src={iconClose} alt="icon close" /></button>
        </div>
        <button className="filter-bar__sort" type="button"><img src={iconSort} alt="icon sort" />По рейтингу</button>
      </div>
      <div className="arrange">
        <button className={`icon-grid-button ${isGrid ? 'icon-button-gradient' : 'icon-button-white'}`} type="button" onClick={setGrid} data-test-id='button-menu-view-window'>
          <IconGrid />
        </button>
        <button className={`icon-list-button ${isGrid ? 'icon-button-white' : 'icon-button-gradient'}`} type="button" onClick={setList} data-test-id='button-menu-view-list'>
          <IconList />
        </button>
      </div>
    </section>
  )
};
