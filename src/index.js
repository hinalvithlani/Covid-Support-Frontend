import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css'; 

Modal.setAppElement("#root");

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
