import React from "react";
import "../css/Leads.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import States from "./State.js";
import City from "./City.js";

var states = "";

const LeadsForm = () => {  
  const [formData, setFormData] = React.useState({verified: false, helpful: 0, not_helpful: 0, others: "NA" });
  const [loginSuccess, setLoginSuccess] = React.useState(false);
  const [stateSuccess, setStateSuccess] = React.useState(false);
  const onChangeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const onChangeName = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const onChangeState = (e) => {
    setFormData({ ...formData, state: e.target.value });
    states = e.target.value;
    setStateSuccess(true);
  };
  const onChangePhNoP = (e) => {
    setFormData({ ...formData, provider_contact: e.target.value });
  };

  const onChangeBeds = (e) => {
    setFormData({ ...formData, beds: e.target.value });
  };
  const onChangeOxygen = (e) => {
    setFormData({ ...formData, oxygen: e.target.value });
  };
  const onChangeOthers = (e) => {
    setFormData({ ...formData, others: e.target.value });
  };
  const onChangeCity = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };
  const onChangeLocation = (e) => {
    setFormData({ ...formData, location: e.target.value });
  };
  const addLeads = () => {
    if(formData.provider_contact>=9999999999 || formData.provider_contact<=1000000000)
    {
      window.alert("Please enter Valid phone number");
    }
    else if(formData.beds<0 || formData.oxygen<0)
    {
      window.alert("Negative number not accepted for beds and oxygen cylinders");
    }
    else{
    axios
      .post(
        "http://localhost:3001/Add",
        { ...formData },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setLoginSuccess(true);
      })
      .catch((e) => {
        window.alert("Please add all required details");
      });
    }
  };
  return (
    <div className='form-style-10'>
      <h1>
        Please Enter Valid Information
        <span>Fill this up and help the people in need</span>
      </h1>
      <div>
        <div className='section'>
          <span>1</span>
          Personal Details
        </div>
        <div className='inner-wrap'>
          <label>
            Your Full Name
            <input
              type='text'
              name='field1'
              value={formData.name}
              onChange={onChangeName}
              required
            />
          </label>
          <label>
            Email Address
            <input
              type='email'
              name='field2'
              value={formData.email}
              onChange={onChangeEmail}
              required
            />
          </label>
        </div>

        <div className='section'>
          <span>2</span>Medical Information
        </div>
        <div className='inner-wrap'>
          <label>
            {" "}
            State
            <States value={formData.state} onChange={onChangeState}></States>
          </label>
          <label>
            {" "}
            City
            {stateSuccess ? (
              <City
                value={formData.city}
                onChange={onChangeCity}
                state={states}
              ></City>
            ) : null}
          </label>
          <label>
            Name of Provider
            <input
              type='text'
              name='field6'
              value={formData.location}
              onChange={onChangeLocation}
              required
            />
          </label>
          <label>
            Phone Number of Provider
            <input
              type='number'
              name='field7'
              value={formData.phnoP}
              onChange={onChangePhNoP}
              maxLength='10'
              required
            />
          </label>
          <label>
            Number Of Vacant Beds
            <input
              type='number'
              name='field8'
              value={formData.beds}
              onChange={onChangeBeds}
              min='0'
            />
          </label>
          <label>
            Number of Oxygen cylinders
            <input
              type='number'
              name='field9'
              value={formData.oxygen}
              onChange={onChangeOxygen}
              min='0'
            />
          </label>
          <label>
            Others
            <input
              type='text'
              name='field10'
              value={formData.others}
              onChange={onChangeOthers}
            />
          </label>
        </div>
        <div className='button-section'>
          <input type='submit' name='Sign Up' onClick={addLeads} />
          {loginSuccess ? <Redirect to='/' /> : null}
        </div>
      </div>
    </div>
  );
};
export default LeadsForm;
