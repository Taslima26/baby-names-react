import React, {useState} from 'react';
import './NamePicker.css';
import NameList from './NameList';
const NamePicker = ({babyNames, searchVal,shortList,setShortList}) => {
  const filteredNames = babyNames.filter((entry) =>
    entry.name.toLowerCase().includes(searchVal)
  );
  function addToShortList(id)
  {
    setShortList([...shortList,id])
  }
  return (
    <NameList nameList={filteredNames} onItemClick={addToShortList}/>
  );
};

export default NamePicker;
