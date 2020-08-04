import React, {useState} from 'react';
import NameList from './NameList';


const ShortList = ({ shortList, setShortList, babyNames }) => {
  console.log('shortList variable value before filter', shortList);
  const shortListedItems = babyNames.filter((entry) =>
    shortList.includes(entry.id))

  console.log('value of shortListedItem', shortListedItems);
  
  
      
    function removeFromShortList(id) {
      setShortList(shortList.filter((i) => i !== id));
      console.log('value of i from removeFromShortList', id);

    }
    const hasName = shortListedItems.length > 0;
    
  return (
      <div>
          <h2>{hasName ? 'Your Short List' : 'click on to add short list'}</h2>
          <pre>{JSON.stringify(shortList)}</pre>
          <NameList nameList={shortListedItems} onItemClick={removeFromShortList}/>
    </div>
  );
};

export default ShortList;
