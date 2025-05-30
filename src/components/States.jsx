import React from 'react';
import { stats } from '../Data';
import parse from 'html-react-parser'

const States = () => {
  return (
    <div className="stats-container">
      {stats.map(({ no, title }, index) => (
        <div className="stats-box" key={index}>
          <h3 className="stats-no">{no}</h3>
          <p className="stats-title">{parse(title)}</p>
        </div>
      ))}
    </div>
  );
};

export default States;
