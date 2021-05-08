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
var states = "";

const SearchLandingPage = () => {
  const [formData, setFormData] = React.useState({});
  const [res1, setRes1] = React.useState(null);
  const [stateSuccess, setStateSuccess] = React.useState(false);
  const [searchSuccess, setSearchSuccess] = React.useState(false);
  const [c1, setc1] = React.useState(0);
  const [c2, setc2] = React.useState(0);
  const onChangeCity = (e) => {
    setFormData({ ...formData, city: e.target.value });
    console.log(e.target.value);
  };
  const onChangeState = (e) => {
    setFormData({ ...formData, state: e.target.value });
    states = e.target.value;
    console.log(states);
    setStateSuccess(true);
  };
  const help = (props) => {
    var x=parseInt(props.helpful);
    x+=1;
    props.helpful=x.toString();
    axios
      .post(
        "http://localhost:3001/add",
        props,
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
        console.log(res.data);
        setSearchSuccess(true);
        setRes1(res.data);
      })
      .catch((e) => {
        console.log(e);
        window.alert("No Results for this state/city combination");
      });
  };
  const nhelp = (props) => {
    var x=parseInt(props.not_helpful);
    x+=1;
    props.not_helpful=x.toString();
    axios
      .post(
        "http://localhost:3001/add",
        props,
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
        console.log(res.data);
        setSearchSuccess(true);
        setRes1(res.data);
      })
      .catch((e) => {
        console.log(e);
        window.alert("No Results for this state/city combination");
      });
  };
  const search = () => {
    console.log(formData.city);
    //setSearchSuccess(true);
    axios
      .post(
        "http://localhost:3001/city",
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
      <div className='abc'>
        <label>
          {" "}
          State
          <States
            value={formData.state}
            onChange={onChangeState}
            style={{ width: "100%" }}
          ></States>
          {/* <input type="text" name="field31" value={formData.state} onChange={onChangeState} required/> */}
        </label>
        <br />
        <label>
          {" "}
          City
          {stateSuccess ? (
            <City
              value={formData.city}
              onChange={onChangeCity}
              state={states}
              style={{ width: "100%" }}
            ></City>
          ) : null}
          {/* <input type="text" name="field32" value={formData.city} onChange={onChangeCity} required/> */}
        </label>
        <br />
        <Button variant='contained' color='primary' onClick={search}>
          Search
        </Button>
      </div>
      {res1 !== null ? (
        <React.Fragment>
          {Object.keys(res1).map((x, i) => (
            <Card key={i} style={{ width: "40%" }} className='ab'>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {res1[x].location}
                    {/* {res1[x].phone_number_provider} */}
                  </Typography>
                  <Typography gutterBottom variant='body1' component='h2'>
                    Number of Beds available: {res1[x].beds}
                    <br />
                    Number of Oxygen cylinders available: {res1[x].oxygen}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {res1[x].city}, {res1[x].state}
                  </Typography>
                  <Typography>
                    Verified: No
                    <br /> Helpful: {res1[x].helpful + c1} Not Helpful:{" "}
                    {res1[x].not_helpful + c2}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <div>
                <Button
                  className='ac'
                  variant='contained'
                  color='primary'
                  style={{
                    width: "30%",
                    marginTop: "10px",
                    marginLeft: "2%",
                  }}
                  onClick={() => {help(res1[x])}}
                >
                  <i className='fas fa-thumbs-up'></i>
                  Helpful
                </Button>

                <Button
                  className='ac'
                  variant='contained'
                  color='primary'
                  style={{
                    marginTop: "10px",
                    marginLeft: "2%",
                    width: "30%",
                  }}
                  onClick={() => {nhelp(res1[x])}}
                >
                  <i className='fas fa-thumbs-down'></i>
                  Not Helpful
                </Button>
              </div>
            </Card>
          ))}
        </React.Fragment>
      ) : searchSuccess && res1 === null ? (
        <div>
          <Typography style={{ margin: "5%", fontSize: "30px", color: "red" }}>
            No results found!
          </Typography>
        </div>
      ) : null}
    </div>
  );
};

export default SearchLandingPage;
