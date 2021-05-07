import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import sc from "./state-city.json";

const options = Object.keys(sc);

console.log(options);

// let optionItems= sampleJSON.map(x => `<option key=${x}</option>`);


const State = () => {
    return(
        <div>
            {/* {options.map((op) => {
                <Dropdown options={options} value={op} placeholder="Select an option" />;
            })} */}
            {/* <select>
                {optionItems}
            </select> */}
                {/* // Object.keys(sampleJSON.object).map((key, i) => (
                // <p key={i}>
                //     <span>Key Name: {key}</span>
                //     <span>Value: {sampleJSON.object[key]}</span>
                // </p>
            // )) */}
            <select>
                {Object.keys(sc).map(s => (<option>{s}</option>))}
            </select>
            
        </div>
    )
}

export default State;