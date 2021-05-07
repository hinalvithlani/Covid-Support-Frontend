import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import "./css/SearchLandingPage.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// class SearchLandingPage extends React.Component{
//     loginClick1 = async () => {
//         const res = await axios.get('https://api.typeform.com/forms/AG5mub9A/responses');
//         console.log(res);
//         return res;
//       };

//       render(){
//           return (
//             <button onClick={this.loginClick1}>Hello</button>
//           )
//       }
// }
        
const SearchLandingPage = () =>{
  const [formData, setFormData] = React.useState({});
  const onChangeCity = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };
  // const [city,setCity]=React.useState({});
  // setCity("Trivandrum");
  
  const [searchSuccess,setSearchSuccess] = React.useState(false);
  const search = () => {
    console.log(formData.city)
    if(formData.city!=" ")
    {
      setSearchSuccess(true);
    }
    // axios
    //   .post(
    //     "http://localhost:3001/api/users/login",
    //     { ...formData },
    //     {
    //       withCredentials: true,
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     localStorage.setItem('city', res.data.name);
    //     setSearchSuccess(true);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     window.alert("Wrong email/password combination");
    //   });    
    // if(city.equals("Trivandrum"))
    // {
    //   setSearchSuccess(true);
    // }
    }
  return(
    <div>
      <TextField
        id="signin-username"
        label="City"
        variant="outlined"
        type="text"
        value={formData.city}
        onChange={onChangeCity}
        style={{marginLeft:'2%', marginTop:'2%'}}
        className="a"
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "40px", marginLeft:'2%' }}
        onClick={search}
      >
        Search
      </Button>

      {searchSuccess?
      (
        <React.Fragment>
        <Card 
        style={{width:"40%"}}
        className="ab">
        <CardActionArea>
          {/* <CardMedia
            title="Contemplative Reptile"
            style={{
              width: "100px",
              borderRadius: "50%",
              marginLeft:"20",
              height: "100px",
              marginTop: "20px",
            }}
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {formData.city}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Available Leads
            </Typography>
            <Typography>
              Verified: No
            </Typography>
          </CardContent>
        <Button className="ac"
        style={{width: '5%'}}
        variant="contained"
        color="primary"
        style={{ marginTop: "10px", marginLeft:'2%', width: '30%'}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" width="20%" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
</svg>
        Helpful
      </Button>
      <Button className="ac"
        variant="contained"
        color="primary"
        style={{marginTop: "10px",marginLeft:'2%', width: '30%' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" width="20%" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
</svg>
        Not Helpful
      </Button>
      </CardActionArea>
      </Card>
      <Card 
      style={{width:"40%"}}
      className="ab">
        <CardActionArea>
          {/* <CardMedia
            title="Contemplative Reptile"
            style={{
              width: "100px",
              borderRadius: "50%",
              marginLeft: "20",
              height: "100px",
              marginTop: "20px",
            }}
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {formData.city}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Available Leads
            </Typography>
            <Typography>
              Verified: Yes
            </Typography>
          </CardContent>
          <Button className="ac"
        style={{width: '5%'}}
        variant="contained"
        color="primary"
        style={{ marginTop: "10px", marginLeft:'2%', width: '30%'}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" width="20%" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
</svg>
        Helpful
      </Button>
      <Button className="ac"
        variant="contained"
        color="primary"
        style={{marginTop: "10px",marginLeft:'2%', width: '30%' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" width="20%" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
</svg>
        Not Helpful
      </Button>
        </CardActionArea>
      </Card>
      </React.Fragment>
      ):null}
    </div>
  )
}      
  


export default SearchLandingPage;
