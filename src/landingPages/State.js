import React from 'react';
import 'react-dropdown/style.css';
import sc from "../json/state-city.json";


const State = ( {value, onChange}) => {    
    return(
        <div>           
            <select onChange={onChange}>
                {Object.keys(sc).map((s,i) => (<option value={s} key={i}>{s}</option>))}
            </select>
        </div>
    )
}

export default State;