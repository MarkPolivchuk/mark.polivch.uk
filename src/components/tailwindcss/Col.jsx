import React from 'react';
import PropTypes from 'prop-types';

const widths = [
  '1/2', // 50%
  '1/3', // 33.33333%
  '2/3', // 66.66667%
  '1/4', // 25%
  '3/4', // 75%
  '1/5', // 20%
  '2/5', // 40%
  '3/5', // 60%
  '4/5', // 80%
  '1/6', // 16.66667%
  '5/6', // 83.33333%
  'full', // 100%
];

const Container = ({
  children, className, w, sm, md, lg, xl,
}) => {
  const classNames = [
    `w-${w}`,
    `sm:w-${sm || w}`,
    `md:w-${md || sm || w}`,
    `lg:w-${lg || md || sm || w}`,
    `xl:w-${xl || lg || md || sm || w}`,
  ];
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
  w: PropTypes.oneOf(widths),
  sm: PropTypes.oneOf(widths),
  md: PropTypes.oneOf(widths),
  lg: PropTypes.oneOf(widths),
  xl: PropTypes.oneOf(widths),
};

Container.defaultProps = {
  children: null,
  className: null,
  w: widths[widths.length - 1],
  sm: null,
  md: null,
  lg: null,
  xl: null,
};

export default Container;
