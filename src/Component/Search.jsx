import React, {useEffect,useRef, useState } from 'react';
import './Search.css';

const Search = ({searchVal,setSearchVal}) => {
    
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },[]);
    const handleChange = (event) => {
        setSearchVal(event.target.value);
    }
    return (<header className='header'  >
        <input ref={inputRef} type='text' placeholder='Enter a name' value={searchVal} onChange={handleChange}/>
            
    </header> );
}
 
export default Search;