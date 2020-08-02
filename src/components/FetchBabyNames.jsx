import React, {State} from 'react';
import {useState} from 'react';
import data from '../Data/BabyNamesData.json';
import './FetchBabyNames.css';

const FetcBabyNames = () => {
  //<div className={props.item.purchased ? 'purchased' : ''}>

  return (
    <div className="name-container">
      {data.map((name) => (
        <span className={name.sex === 'f' ? 'Girl-Name' : 'Boy-Name'}>
          {name.name}
        </span>
      ))}
    </div>
  );
};

export default FetcBabyNames;
