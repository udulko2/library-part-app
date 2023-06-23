import './review-author.css';
import reviewAuthorAvatar from './review-author-avatar.jpg';

export const ReviewAuthor = (props) => (
  <div className="book-review-author">
    <img src={reviewAuthorAvatar} alt="review author avatar" />
    <span>{props.name}</span>
    <span>5 января 2019</span>
  </div>
);
