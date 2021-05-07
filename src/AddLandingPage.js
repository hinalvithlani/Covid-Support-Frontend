import React from "react";
import "./css/AddLandingPage.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import doc from "./images/doc1.png";
import leads from "./images/leads.png";
import axios from "axios";
import { Redirect } from "react-router-dom";

const AddLandingPage = () => {
  const [formData, setFormData] = React.useState({});
  const [loginSuccess, setLoginSuccess] = React.useState(false);
  const onChangeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const loginClick = () => {
    axios
      .post(
        "http://localhost:3001/api/users/login",
        { ...formData },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("emailid", res.data.email);
        localStorage.setItem("name", res.data.name);
        console.log(res.data.name);
        setLoginSuccess(true);
      })
      .catch((e) => {
        console.log(e);
        window.alert("Wrong email/password combination");
      });
  };

  return (
    // <div>
    //   <ReactTypeformEmbed url="https://lq60r038hq4.typeform.com/to/AG5mub9A" />;
    // </div>
    <div>
      <div className='sign-in'>
        <div className='sign-in-inner'>
          <div className='sign-in-illustration'>
            <img src={leads} alt='sign in illustration' width='80%' />
            {/* <a href='https://pngtree.com/so/community-helpers-clipart'>
              community helpers clipart png from pngtree.com
            </a> */}
          </div>
          <div className='sign-in-form'>
            <div className='signin-form-container'>
              <h1>Leads Collection Form</h1>
              <div className='signin-form-main'>
                <TextField
                  id='signin-username'
                  label='Number of beds'
                  variant='outlined'
                  type='text'
                  fullWidth
                  value={formData.email}
                  onChange={onChangeEmail}
                />
                <br />
                <br />
                <TextField
                  id='signin-password'
                  label='Hospital Name'
                  variant='outlined'
                  type='text'
                  fullWidth
                  value={formData.password}
                  onChange={onChangePassword}
                />
                <br />
                <Button
                  variant='contained'
                  color='primary'
                  style={{ marginTop: "40px" }}
                  onClick={loginClick}
                >
                  SignIn
                </Button>
                {loginSuccess && (
                  <div className='success-message'>
                    Success! Thank you for adding
                  </div>
                )}
                {loginSuccess ? <Redirect to='/' /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLandingPage;
