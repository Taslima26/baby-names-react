import React, { useState } from 'react';
import './NameList.css'
const NameList = ({nameList,onItemClick}) => {
    return (<div>
        <ul className="container">
            {nameList.map((entry) => (
                <li className={entry.sex} key={entry.id}>
                    <button className={entry.sex} onClick={() => onItemClick(entry.id)}> {entry.name}</button>
                </li>
            ))}
        </ul>
    </div> );
}
 
export default NameList;