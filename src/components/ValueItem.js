import React from 'react';

const ValueItem = ({ icon, title, items }) => (
  <div className="value-item">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ValueItem;
