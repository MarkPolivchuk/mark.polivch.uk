import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, className }) => {
  const classNames = [
    'flex',
    'flex-wrap',
  ];
  if (className) { classNames.push(className); }
  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Row.defaultProps = {
  children: null,
  className: null,
};

export default Row;
