import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import samiksa from "../images/Samiksa.jpeg";
import hinal from "../images/hinal.JPG";
import pranav from "../images/pranav.jpg";
import vinayak from "../images/vinayak.jpeg";
import gaurav from "../images/gaurav.jpeg";
import "../css/TeamLandingPage.css";

const TeamLandingPage = () => {
    return(
        <div style={{margin:'2%'}}>
            <Card style={{margin:'auto' ,width:'45%'}}>
                <CardActionArea>
                    <CardMedia
                        image={pranav}
                        title="Contemplative Reptile"
                        style={{
                            width: "150px",
                            borderRadius: "10%",
                            margin: "auto auto",
                            height: "150px",
                            marginTop: "20px",
                        }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Dr. Vishnu Srinivasa Murthy Y
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card style={{margin:'2%' ,width:'29%', height:'50%', float: 'left'}}>
                <CardActionArea>
                    <CardMedia
                        image={samiksa}
                        title="Contemplative Reptile"
                        style={{
                            width: "150px",
                            borderRadius: "10%",
                            margin: "auto auto",
                            height: "150px",
                            marginTop: "20px",
                        }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Samiksa M
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card style={{margin:'2%' ,width:'29%', float: 'left'}}>
                <CardActionArea>
                    <CardMedia
                        image={hinal}
                        title="Contemplative Reptile"
                        style={{
                            width: "150px",
                            borderRadius: "10%",
                            margin: "auto auto",
                            height: "150px",
                            marginTop: "20px",
                        }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Hinal C Vithlani
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card style={{margin:'2%' ,width:'29%', float: 'left'}}>
                <CardActionArea>
                    <CardMedia
                        image={pranav}
                        title="Contemplative Reptile"
                        style={{
                            width: "150px",
                            borderRadius: "10%",
                            margin: "auto auto",
                            height: "150px",
                            marginTop: "20px",
                        }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Sai Pranav Tavva
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card style={{marginLeft:'18%' ,width:'29%', float: 'left'}}>
                <CardActionArea>
                    <CardMedia
                        image={vinayak}
                        title="Contemplative Reptile"
                        style={{
                            width: "150px",
                            borderRadius: "10%",
                            margin: "auto auto",
                            height: "150px",
                            marginTop: "20px",
                        }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Vinayak Dubey
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card style={{marginRight:'18%' ,width:'29%', float: 'right'}}>
                <CardActionArea>
                    <CardMedia
                        image={gaurav}
                        title="Contemplative Reptile"
                        style={{
                            width: "150px",
                            borderRadius: "10%",
                            margin: "auto auto",
                            height: "150px",
                            marginTop: "20px",
                        }}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Gaurav Singh
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>            
        </div>
    )
}
export default TeamLandingPage;