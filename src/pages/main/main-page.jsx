import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookCard } from '../../components/card';
import { FilterBar } from '../../components/filter';
import './main-page.css';
import data from '../../data/books.json'

export const MainPage = () => {
  const [view, setView] = useState('grid');
  const isGrid = (view === 'grid');
  const params = useParams();

  const booksMarkup = data.map(({ id, title, author, year, images }) => {
    const cover = images.length > 0 ? images[0] : null;

    return (
      <Link to={`/books/${params.category}/${id}`} key={id}><BookCard title={title} author={author} year={year} cover={cover} /></Link>
    )
  })

  return (
    <section className='main-page'>
      <FilterBar isGrid={isGrid} setGrid={() => setView('grid')} setList={(() => setView('list'))} />
      <div className={`books-wrapper ${isGrid ? 'books-wrapper-grid' : 'books-wrapper-list'}`}>
        {booksMarkup}
      </div>
    </section>
  )
};
