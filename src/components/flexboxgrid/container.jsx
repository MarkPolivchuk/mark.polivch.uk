// Uses container and container-fluid from flexboxgrid.css
// TODO update to custom grid

import React from 'react';
import PropTypes from 'prop-types';

const Container = ({
  fluid, className, children, ...rest
}) => {
  let newClassName = fluid ? 'container-fluid' : 'container';
  if (className) {
    newClassName += ` ${className}`;
  }
  return (
    <div className={newClassName} {...rest} >
      { children }
    </div>
  );
};

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  fluid: false,
  className: '',
};

export default Container;
