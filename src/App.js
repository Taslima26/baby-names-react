import React, { useState }from 'react';
import './App.css';
import NamePicker from './Component/NamePicker';
import Search from './Component/Search';
import ShortList from './Component/ShortList';
import GenderFilter from './Component/GenderFilter';

function App({ babyNames }) {
  const [searchVal, setSearchVal] = useState('');
  const [shortList, setShortList] = useState([]);
  const [radioButton, setRadioButton] = useState([]);
  return (
    <div>
      <Search searchVal={searchVal} setSearchVal={setSearchVal} />
      <GenderFilter babyNames={babyNames} radioButton={radioButton} setRadioButton={setRadioButton} />
      <ShortList shortList={shortList} setShortList={setShortList} babyNames={babyNames}/>
      <NamePicker babyNames={babyNames} searchVal={searchVal} shortList={shortList} setShortList={setShortList} />
     
      
    </div>
  )
 
}

export default App;
