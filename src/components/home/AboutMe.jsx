import React, { useState, useEffect, Profiler } from "react";
import axios from "axios";
// import Pdf from "../../editable-stuff/Resume.pdf";
import Profile from "../../editable-stuff/profileHeadshot.jpg"
import {Helmet} from "react-helmet";

import {
  aboutHeading,
  showInstaProfilePic,
  instaLink,
  instaUsername,
  instaQuerry,
} from "../../editable-stuff/configurations.json";
const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
const AboutMe = () => {
  const [instaProfilePic, setInstaProfilePic] = useState("");
  const [showInsta, setShowInsta] = useState(showInstaProfilePic);
  // const [resumeURL] = useState(Pdf);

  useEffect(() => {
    if (showInsta) {
      handleRequest();
    }
  }, [showInsta]);

  const handleRequest = (e) => {
    axios
      .get(instaLink + instaUsername + instaQuerry)
      .then((response) => {
        // handle success
        // console.log(response.data.graphql);
        return setInstaProfilePic(
          response.data.graphql.user.profile_pic_url_hd
        );
      })
      .catch((error) => {
        // handle error
        setShowInsta(false);
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#f7f7f7'}}>
      <div className="container container-fluid">
        <div className="row" style={divStyle}>
            <div className="col-5 d-none d-lg-inline align-self-center">
              <img
                className="border border-secondary rounded-circle"
                src={Profile}
                alt="profilepicture"
                width="375"
                height="440"
              />
            </div>
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
            <p className="lead text-center"> Hi, I’m Danial, an undergrad at USC studying CS + Business.  
            <br></br>
            <br></br>
            My love for technology is the wind in my sails. I'm currently a SWE intern at Snap Inc. and an engineering fellow at 8VC (SWE @ Zanbato). Additionally I'm working alongside Draper Associates and First Check Ventures
            to support irrationally motivated founders solving technical challenges. 
        <br></br>
            <br></br>
            I'm also a professional chess player. <a href="https://danialasaria.com/#chess">Here's</a> how I got started and 
            <a href="https://danialasaria.com/#press"> here </a>
         are my accomplishments in the press. Now I run a global chess school
      working to combat educational inequity.
      <br></br>
            <br></br>
            My lifelong goals are to always be learning, creating, and curious.
      I want to be around people who are ambitious and passionate about their work. 
      <br></br>
            <br></br>
            Feel free to say hi! I enjoy meeting new people. 
        <br /><br />
            </p><br/>
            {/* {resumeURL && (
              <p className="lead text-center">
                <a 
                  className="btn btn-outline-dark btn-lg"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  
                >
                  Resume
                </a>
              </p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
