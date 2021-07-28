import React from 'react';
import './scss/layouts/_taxotron.scss';
const Taxotron = props => {
  return (
    <div>
      <div className="taxotron-container">
        <div className="taxotron-heading">{props.heading}</div>
        <div className="taxotron-sub-heading">{props.subHeading}</div>
        <div className="taxotron-large-image" />
        <div className="taxotron-small-image" />
        <div className="chid-component">{props.children}</div>
      </div>
    </div>
  );
};

export default Taxotron;
