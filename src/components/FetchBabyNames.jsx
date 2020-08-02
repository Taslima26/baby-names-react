import React, {State} from 'react';
import {useState} from 'react';

import './FetchBabyNames.css';
import SearchBabyNames from './SearchBabyNames';

const FetchBabyNames = ({babyNames}) => {
  //<div className={props.item.purchased ? 'purchased' : ''}>

  return (
    <div class="container">
      
      <div className="name-container">
        {babyNames.map((name) => (
          <span className={name.sex === 'f' ? 'Girl-Name' : 'Boy-Name'}>
            {name.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FetchBabyNames;
