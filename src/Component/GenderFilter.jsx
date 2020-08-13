import React, {useState} from 'react';
import NameList from './NameList';
import './GenderFilter.css';

const GenderFilter = ({babyNames, radioButton, setRadioButton}) => {
  const onChangeValue = (event) => {
    const value = event.target.value;
    if (value === 'Boy') {
      const shortListedItems = babyNames.filter((entry) => entry.sex === 'm');

      setRadioButton(shortListedItems);
    } else if (value === 'Girl') {
      const shortListedItems = babyNames.filter((entry) => entry.sex === 'f');
      setRadioButton(shortListedItems);
    } else {
      setRadioButton(babyNames);
    }
  };
  console.log('value of radionButton variable', radioButton);
  return (
    <div className='container'>
      <div onChange={onChangeValue}>
        <input type="radio" value="Boy" name="gender" /> Boy
        <input type="radio" value="Girl" name="gender" /> Girl
        <input type="radio" value="Other" name="gender" />
        Both
      </div>
      <NameList nameList={radioButton} onItemClick={onChangeValue} />
    </div>
  );
};

export default GenderFilter;
