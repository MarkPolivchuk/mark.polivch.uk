import React from 'react';
import PropTypes from 'prop-types';


const IconLabel = ({ label, icon, iconSet }) => (
  <div className="flex items-start text-grey-dark mb-2">
    <i className={`${iconSet} fa-sm fa-fw fa-${icon}`} />
    <span className="text-xs ml-2">{label}</span>
  </div>
);

IconLabel.propTypes = {

};

IconLabel.defaultProps = {
  iconSet: 'fa',
};

export default IconLabel;
