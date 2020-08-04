import React, { useState } from 'react';
const NameList = ({nameList,onItemClick}) => {
    return (<div>
        <ul className="container">
            {nameList.map((entry) => (
                <li className={entry.sex} key={entry.id}>
                    <button onClick={() => onItemClick(entry.id)}> {entry.name}</button>
                </li>
            ))}
        </ul>
    </div> );
}
 
export default NameList;