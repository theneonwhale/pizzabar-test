import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ onClick, children }) {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
