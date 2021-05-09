import React from "react";
import "../css/AddLandingPage.css";
import leads from "../images/leads.png";
import LeadsForm from "./LeadsForm.js";
import doc from "../images/doc2.png";

const AddLandingPage = () => {
  return (
    <div>
      <div className='sign-in'>
        <div className='sign-in-inner'>
          <div className='sign-in-illustration'>
            <img src={leads} alt='sign in illustration' width='80%' />
            {/* <a href='https://pngtree.com/so/community-helpers-clipart'>
              community helpers clipart png from pngtree.com
            </a> */}
            <br />
            <img
              src={doc}
              alt='Doctor Vaccination'
              width='80%'
              style={{ transform: "translate(-50%, -10%)" }}
            />
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
