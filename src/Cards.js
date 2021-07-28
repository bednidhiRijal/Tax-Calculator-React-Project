import React from 'react';
import './scss/layouts/_cards.scss';

const Cards = props => {
  return (
    <div className="card-background">
      <div className="card">
        <div className="card-inner">{props.children}</div>
      </div>
    </div>
  );
};

export default Cards;
