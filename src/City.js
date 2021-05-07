import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ci from "./cities.json";
import PropTypes from "prop-types";

const options = Object.keys(ci);

console.log(options);

const City = () => {
    return(
        <div>
            {/* {options.map((op) => {rn(
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
                {Object.values(ci).map(s => (<option>{s}</option>))}
            </select>
            
        </div>
    )
}
// City.propTypes = {
//     state: PropTypes.string.isRequired,
//     };

export default City;