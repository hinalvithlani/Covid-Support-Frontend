import React from "react";
import "./css/Leads.css";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { StateDropdown, RegionDropdown } from 'react-indian-state-region-selector';
import States from "./State.js";
import City from "./City.js"

const LeadsForm = () => {
    const [formData, setFormData] = React.useState({});
    const [loginSuccess, setLoginSuccess] = React.useState(false);
    const onChangeEmail = (e) => {
      setFormData({ ...formData, email: e.target.value });
    };
    const onChangeName = (e) => {
      setFormData({ ...formData, name: e.target.value });
    };
    const onChangeState = (e) => {
        setFormData({ ...formData, state: e.target.value });
    };
    const onChangePhNo = (e) => {
        setFormData({ ...formData, phone_number: e.target.value });
    };

    const onChangeNb = (e) => {
        setFormData({ ...formData, beds: e.target.value });
    };
    const onChangeNv = (e) => {
        setFormData({ ...formData, oxygen: e.target.value });
    };
    const onChangeNr = (e) => {
        setFormData({ ...formData, others: e.target.value });
    };
    const onChangeCity = (e) => {
        setFormData({ ...formData, city: e.target.value });
    };

    const check1 = () => {
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }
    const check2 = () => {
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }
    const addLeads = () => {
      axios
        .post(
          "http://localhost:3002/Add",
          { ...formData },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          setLoginSuccess(true);
        })
        .catch((e) => {
          console.log(e);
          window.alert("Not added");
        });
    }
    return(
        <div className="form-style-10">
            <h1>Please Enter Valid Information<span>Fill this up and help the people in need</span></h1>
            <div>
                <div className="section">
                    <span>1</span>
                    Personal Details
                </div>
                <div className="inner-wrap">
                    <label>Your Full Name 
                        <input type="text" name="field1" value={formData.username} onChange={onChangeName} required/>
                    </label>
                    <label>Email Address 
                        <input type="email" name="field3" value={formData.email} onChange={onChangeEmail} required/>
                    </label>
                    <label>Phone Number 
                        <input type="text" value={formData.phno} onChange={onChangePhNo} name="field4" maxLength="10" />
                    </label>
                </div>

                <div className="section"><span>2</span>Medical Information</div>
                <div className="inner-wrap">
                    <label> State
                        <States id="ss" value={formData.state} onChange={onChangeState}></States>
                    </label>
                    <label> City
                        <City id="ss" value={formData.city} onChange={onChangeCity}></City>                    
                    </label>
                    <label>Number Of Vacant Beds 
                        <input type="number" name="field6" value={formData.nb} onChange={onChangeNb}
                         />
                    </label>
                    <label> Number of Oxygen cylinders
                        <input type="number" name="field7" value={formData.nv} onChange={onChangeNv} 
                        />
                    </label>
                    <label>Others
                        <input type="text" name="field8" value={formData.nr} onChange={onChangeNr} />
                    </label>
                </div>
                <div className="button-section">
                    <input type="submit" name="Sign Up" onClick={addLeads} />
                    {loginSuccess ? <Redirect to='/' /> : null}
                    <span className="privacy-policy">
                        <input type="checkbox" name="field7" /> You agree to our 
                        <Link to="./tandc" style={{textDecoration: "none"}} >
                            Terms and Policy.
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default LeadsForm;