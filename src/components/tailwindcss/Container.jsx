import React from 'react';
import PropTypes from 'prop-types';

const Container = ({
  children, className, center,
}) => {
  const classNames = [
    'container',
  ];
  if (center) { classNames.push('mx-auto'); }
  if (className) { classNames.push(className); }
  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  center: PropTypes.bool,
};

Container.defaultProps = {
  children: null,
  className: null,
  center: true,
};

export default Container;
