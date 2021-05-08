import React from 'react';
import sc from "../json/state-city.json";
import PropTypes from "prop-types";


const State = ( {value, onChange}) => {    
    return(
        <div>           
            <select onChange={onChange}>
                <option value="none" selected disabled hidden>Select State</option>
                {Object.keys(sc).map((s,i) => (<option value={s} key={i}>{s}</option>))}
            </select>
        </div>
    )
}

export default State;