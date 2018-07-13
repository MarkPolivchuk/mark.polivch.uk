import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ color, children }) => (
  <span className={`rounded-full bg-${color} px-2 py-1 mr-2 mb-2 text-xs font-medium text-white`}>{children}</span>
);

Badge.propTypes = {

};

export default Badge;
