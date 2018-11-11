import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className }) => {
  const classNames = [
    'bg-white',
    'shadow',
  ];
  if (className) { classNames.push(className); }
  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: null,
};

export default Card;

