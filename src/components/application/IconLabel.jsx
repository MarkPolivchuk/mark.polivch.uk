import React from 'react';
import PropTypes from 'prop-types';


const IconLabel = ({ label, icon }) => (
  <div className="flex items-center text-grey-dark mb-2">
    <i className={`fa fa-sm fa-fw fa-${icon}`} />
    <span className="text-xs ml-2">{label}</span>
  </div>
);

IconLabel.propTypes = {

};

export default IconLabel;
