import React from 'react';
import sc from "../json/state-city.json";
import PropTypes from "prop-types";


const City = ({value, onChange, state, ...props}) => {
    return(
        <div>
            <select onChange={onChange}>
                {sc[state].map((s,i) => (<option value={s} key={i}>{s}</option>))}
            </select>            
        </div>
    )
}
City.propTypes = {
    state: PropTypes.string.isRequired,
};

export default City;