import './button.css';

export const Button = (props) => (
  <button className={`btn-common ${props.classnames}`} type='button'>{props.title}</button>
)
