import './stars.css';
import starFull from './star-full.svg';
import starEmpty from './star-empty.svg';

export const Stars = () => (
  <div className="book-rating-stars">
    <img src={starFull} alt="star full" />
    <img src={starFull} alt="star full" />
    <img src={starFull} alt="star full" />
    <img src={starFull} alt="star full" />
    <img src={starEmpty} alt="star empty" />
  </div>
);
