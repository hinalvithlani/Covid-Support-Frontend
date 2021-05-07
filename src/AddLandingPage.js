import React from "react";
import "./css/AddLandingPage.css";
import leads from "./images/leads.png";
import LeadsForm from "./LeadsForm.js"
import axios from "axios";

const AddLandingPage = () => {
  
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
              <LeadsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLandingPage;
