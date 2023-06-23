import './book-card.css';
import bookCardDefaultImage from './assets/book-card-default-image.jpg';
import { Button } from '../button';
import { Stars } from '../stars';

export const BookCard = ({ title, author, year, cover }) => {

  const bookCardImage = (cover !== null) ? cover : bookCardDefaultImage

  return (
    <div>
      <div className="book-card" data-test-id='card'>
        <img className='book-card__image' src={bookCardImage} alt="book cover" />
        <div className='book-stars'><Stars /></div>
        <p className="book-title">{title}</p>
        <p className="book-author">{author}, <span className="book-year">{year}</span> </p>
        <Button classnames='btn-book-card-grid' title='Забронировать' />
      </div>
      <div className="book-card-list">
        <img className='book-card-list__image' src={bookCardImage} alt="book cover" />
        <div>
          <p className="book-card-list__title">{title}</p>
          <p className="book-card-list__author">{author}, <span>{year}</span> </p>
          <div className='book-card-list-stars-btn'>
            <div className='book-card-list__stars'>
              <Stars />
            </div>
            <Button classnames='book-card-list__btn' title='Забронировать' />
          </div>
        </div>
      </div>
    </div>
  )
}
