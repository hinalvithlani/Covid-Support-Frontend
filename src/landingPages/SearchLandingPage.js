import React from "react";
import axios from "axios";
import "../css/SearchLandingPage.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import States from "./State.js";
import City from "./City.js";
var states="";

const SearchLandingPage = () => {
  const [formData, setFormData] = React.useState({});
  const [res1,setRes1] = React.useState(null);
  const [stateSuccess, setStateSuccess] = React.useState(false);
  const [searchSuccess, setSearchSuccess] = React.useState(false);
  const onChangeCity = (e) => {
    setFormData({ ...formData, city: e.target.value });
    console.log(e.target.value);
  };
  const onChangeState = (e) => {
    setFormData({ ...formData, state: e.target.value });
    states=e.target.value;
    console.log(states);
    setStateSuccess(true);
  };
  const search = () => {
    console.log(formData.city);
    setSearchSuccess(true);
    axios
      .post(
        "http://localhost:3002/city",
        { ...formData },
        {
          headers:{
            "Access-Control-Allow-Origin": '*'
          }    
      },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        setSearchSuccess(true);
        setRes1(res.data);
      })
      .catch((e) => {
        console.log(e);
        window.alert("No Results for this state/city combination");
      });
  };
  return (
    <div>
      <label> State
        <States value={formData.state} onChange={onChangeState}></States>
        {/* <input type="text" name="field31" value={formData.state} onChange={onChangeState} required/> */}
      </label>
      <label> City
        {stateSuccess?<City value={formData.city} onChange={onChangeCity} state={states}></City>:null}                    
        {/* <input type="text" name="field32" value={formData.city} onChange={onChangeCity} required/> */}
      </label>
      <Button
        variant='contained'
        color='primary'
        style={{ marginTop: "40px", marginLeft: "2%" }}
        onClick={search}
      >
        Search
      </Button>
      {res1!==null ? (
        <React.Fragment>
           {Object.keys(res1).map((x,i) => (
             <Card key={i} style={{ width: "40%" }} className='ab'>
             <CardActionArea>
               <CardContent>
                 <Typography gutterBottom variant='h5' component='h2'>
                   {res1[x].city}
                 </Typography>
                 <Typography gutterBottom variant='h5' component='h2'>
                   {res1[x].state}
                 </Typography>
                 <Typography variant='body2' color='textSecondary' component='p'>
                   {res1[x].location}
                 </Typography>
                 <Typography>Verified: No</Typography>
               </CardContent>
               <Button
                 className='ac'
                 variant='contained'
                 color='primary'
                 style={{ width: "30%", marginTop: "10px", marginLeft: "2%" }}
               >
                 <i className="fas fa-thumbs-up"></i>
                 Helpful
               </Button>
               
               <Button
                 className='ac'
                 variant='contained'
                 color='primary'
                 style={{ marginTop: "10px", marginLeft: "2%", width: "30%" }}
               >
                 <i className="fas fa-thumbs-down"></i>
                 Not Helpful
               </Button>
             </CardActionArea>
           </Card>
          ))}
        </React.Fragment>
      ) : 
      // searchSuccess?window.alert("No Results for this state/city combination"):
      null}
    </div>
  );
};

export default SearchLandingPage;
