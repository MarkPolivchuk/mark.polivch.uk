import React from 'react';
import PropTypes from 'prop-types';

const Container = ({
  children, className, center, padding,
}) => {
  const classNames = [
    'container',
  ];
  if (center) { classNames.push('mx-auto'); }
  if (padding) { classNames.push(`px-${padding}`); }
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
  padding: PropTypes.number,
};

Container.defaultProps = {
  children: null,
  className: null,
  center: true,
  padding: 3,
};

export default Container;
