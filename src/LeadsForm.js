import React from "react";
import "./css/Leads.css";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import axios from "axios";
import Location from "./images/location.png"
import { Redirect } from "react-router-dom";

const LeadsForm = () => {
    const [formData, setFormData] = React.useState({});
    const [loginSuccess, setLoginSuccess] = React.useState(false);
    const onChangeEmail = (e) => {
      setFormData({ ...formData, email: e.target.value });
    };
    const onChangePass = (e) => {
        setFormData({ ...formData, password: e.target.value });
    };
    const onChangeName = (e) => {
      setFormData({ ...formData, username: e.target.value });
    };
    const onChangeAddress = (e) => {
        setFormData({ ...formData, address: e.target.value });
    };
    const onChangePhNo = (e) => {
        setFormData({ ...formData, phno: e.target.value });
    };
    const onChangeLoc = (e) => {
        setFormData({ ...formData, loc: e.target.value });
    };
    const onChangeNb = (e) => {
        setFormData({ ...formData, nb: e.target.value });
    };
    const onChangeNv = (e) => {
        setFormData({ ...formData, nv: e.target.value });
    };
    const onChangeNr = (e) => {
        setFormData({ ...formData, nr: e.target.value });
    };
    const onChangeNo = (e) => {
        setFormData({ ...formData, no: e.target.value });
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
          "http://localhost:3001/api/users/signup",
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
          window.alert("Wrong info");
        });
    }
    return(
        <div className="form-style-10">
            <h1>Please Enter Valid Information<span>Fill this up and help the people in need</span></h1>
            <div>
                <div className="section">
                    <span>1</span>
                    First Name &amp; Address
                </div>
                <div className="inner-wrap">
                    <label>Your Full Name 
                        <input type="text" name="field1" value={formData.username} onChange={onChangeName}/>
                    </label>
                    <label>Address 
                        <textarea name="field2" value={formData.address} onChange={onChangeAddress}></textarea>
                    </label>
                </div>

                <div className="section">
                    <span>2</span>
                    Email &amp; Phone
                </div>
                <div className="inner-wrap">
                    <label>Email Address 
                        <input type="email" name="field3" value={formData.email} onChange={onChangeEmail}/>
                    </label>
                    <label>Password 
                        <input type="password" name="field30" value={formData.password} onChange={onChangePass}/>
                    </label>
                    <label>Phone Number 
                        <input type="text" value={formData.phno} onChange={onChangePhNo} name="field4" onInput={check2} maxLength="10" />
                    </label>
                </div>

                <div className="section"><span>3</span>Medical Information</div>
                <div className="inner-wrap">
                    <label>Location
                        <Button style={{marginLeft: "20px"}}><img src={Location} alt="" srcSet=""
                            style={{width: "15px"}} />
                        </Button>
                        <input type="text" name="field5" value={formData.loc} onChange={onChangeLoc} style={{marginTop: "5px"}} />
                    </label>
                    <label>Number Of Vacant Beds 
                        <input type="text" name="field6" value={formData.nb} onChange={onChangeNb}
                        onInput={check1} />
                    </label>
                    <label>Vaccines Available ?
                        <input type="text" placeholder="Yes or No" name="field7" value={formData.nv} onChange={onChangeNv}
                        pattern="yes" />
                    </label>
                    <label>Remdesever Available ?
                        <input type="text" placeholder="Yes or No" name="field8" value={formData.nr} onChange={onChangeNr} />
                    </label>
                    <label>Oxygen Available ?
                        <input type="text" placeholder="Yes or No" name="field9" value={formData.no} onChange={onChangeNo} />
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