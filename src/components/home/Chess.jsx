import React, { useState, useEffect, Profiler } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Nationals8 from "../../editable-stuff/8th Grade Nationals- 2015.JPG"
import Handshake from "../../editable-stuff/handshake.jpg"
import Nationals from "../../editable-stuff/Nationals.jpg"
import Americanopen from "../../editable-stuff/AmericanOpen-2018.JPG"
import JuniorHigh from "../../editable-stuff/Junior High K-8 - 2016.JPG"
import IsmailiTeam from "../../editable-stuff/Ismaili Team - 2019.JPEG"
import Polgar from "../../editable-stuff/Polgar.jpg"
import IsmailiGames from "../../editable-stuff/Ismaili Games - 2019.jpg"
import IM from "../../editable-stuff/IM.jpeg"
import Mayor from "../../editable-stuff/mayor.JPG"
import Superstates from "../../editable-stuff/SuperStates - 2019.JPG"
import littlesuperstates from "../../editable-stuff/littlesuperstates.JPG"
import littlenationals from "../../editable-stuff/littlenationals.JPG"
import juniorchesscongress from "../../editable-stuff/juniorchesscongress.JPG"
import elementarychampionship from "../../editable-stuff/Elementary Championship - 2011.jpg"
import grade3nationals from "../../editable-stuff/3rd Grade National Championship - 2010 .jpg"
import Anand from "../../editable-stuff/Danial Asaria vs World Champion - 2012.jpg"
import nationals2013 from "../../editable-stuff/Super Nationals 2013.jpg"
import WorldOpen from "../../editable-stuff/World Open (2014).jpg"
import '../../App.css';

const mystyle = {
  color: "white",
  fontFamily: "Arial",
  top: "0px",
  bottom: "auto",
  marginTop: "100px",
  
};

const Chess = () => {
    return (
        <div id="chess" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
          <div className="container container-fluid">
            <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                <h1 className="display-4 mb-3 text-center">Chess</h1>
                <br/>
                <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                  <p className="lead text-left">
                  I began to play chess at 7 years old and after my coach began our first class by saying, "Every champion was once a beginner" 
                  my youthful imagination ran wild and I was hooked. My early development in chess proved to 
                  be nontraditional where my structured classes provided by my school were supplemented by the
                  aggressive, unconventional playing styles I learned from spending my weekends sneaking games in with 
                   hustlers at my local chess park. Yet learning these vastly different approaches to the game allowed me to become a more complete player, and 
                   after 6 weeks of practice, I could beat every kid in my class and almost defeated my coach. At age 11 I achieved the title of Master,
                    and since then have become a 5-time National Champion and am currently the #1 18-year-old on the west coast of the United States. In addition, 
                    I have defeated numerous world-renowned Grandmasters and played some of the best in the world including World Champion Viswanathan Anand and Grandmaster Hikaru 
                    Nakamura. My peak United States Chess Federation and International Chess Federation ratings are 2420 and 2340 respectively, awarding me the titles of 
                    FIDE International Master and National Master/Life Master (top .43% in the world). Inspired to share this passion I created the Asaria School of Chess where I teach students ages 5-80 from across the US, UK, and Asia.{/* I've been extremely grateful to have opportunities to lead my peers
                       */}
                 </p>  
              </div>
              
                <div className="col d-lg-inline align-self-center">
                
                <Carousel>
                <Carousel.Item>
                {/* <div className="col d-none d-lg-inline align-self-center"> */}
                  <img
                    className="rounded"
                    src={Handshake}
                    alt="Handshake"
                    width="520"
                    height="410"
                  /> 
                  { <Carousel.Caption>
                    <h4 className="move"> Southern California Scholastic Championship (2009) </h4>
                    </Carousel.Caption> }
                  </Carousel.Item>
                <Carousel.Item>
                <img
                    className="rounded"
                    src={littlenationals}
                    alt="littlenationals"
                    width="520"
                    height="430"
                  /> 
                  <Carousel.Caption>
                    <h7 ><b>Southern California Amateur Team Championship (2010)</b></h7>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={grade3nationals}
                    alt="3rd grade nationals"
                    width="520"
                    height="430"
                  /> 
                  <Carousel.Caption>
                    <h7 ><b>Third Grade National Championship (2010)</b></h7>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={elementarychampionship}
                    alt="elementary championship"
                    width="520"
                    height="430"
                  /> 
                  <Carousel.Caption>
                    <h7 ><b> National Elementary Championship (2011)</b></h7>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={Anand}
                    alt="elementary championship"
                    width="520"
                    height="430"
                  /> 
                  <Carousel.Caption>
                    <h7 ><b> Match against World Champion Viswanathan Anand (11 years old) (2012)</b></h7>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={nationals2013}
                    alt="2013 Supernationals"
                    width="520"
                    height="490"
                  /> 
                  <Carousel.Caption>
                    <h7 ><b>Super Nationals (2013)</b></h7>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={littlesuperstates}
                    alt="littlesuperstates"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8 className="move">1st Place in State Championship (2014)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={juniorchesscongress}
                    alt="juniorchesscongress"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8>1st Place in Chess Congress (2014)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={WorldOpen}
                    alt="World Open 2014"
                    width="520"
                    height="430"
                  /> 
                  <Carousel.Caption>
                    <h7 ><b>World Open (2014)</b></h7>
                    </Carousel.Caption>
                  </Carousel.Item>
                {/* </div>
                </div>
                <div className="row"> 
                <div className="col d-none d-lg-inline align-self-center"> */}
                {/*<Carousel.Item>
                <img
                    className="rounded"
                    src={Gold}
                    alt="Gold"
                    width="520"
                    height="390"
                /> 
                  {/* <Carousel.Caption>
                <h2>Student Engineering </h2>
                <h5>Promoted student involvement in the community through volunteering and philanthropy.</h5>
                </Carousel.Caption> 
                  </Carousel.Item> */}
                <Carousel.Item>
                <img
                    className="rounded"
                    src={Nationals8}
                    alt="Nationals8"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8>8th Grade National Champion (2015)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={JuniorHigh}
                    alt="JuniorHigh"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8>Junior High K-8 National Champion (2016)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={Mayor}
                    alt="IsmailiGames"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8>Commendation from the Mayor of Los Angeles for achievement in chess and academics (2016)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Nationals}
                    alt="Nationals"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8>Nationals First Board (2018)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Americanopen}
                    alt="Americanopen"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8>Youngest Champion of the American Open (2018)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={Superstates}
                    alt="Superstates"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8>State Championship Ceremonial First Move with Mayor (2019)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={IsmailiTeam}
                    alt="IsmailiTeam"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8>Ismaili Muslim Volunteer Tournament (2019)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={IsmailiGames}
                    alt="IsmailiGames"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8>1st Place in USA Ismaili Games (2019)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                <img
                    className="rounded"
                    src={Polgar}
                    alt="Polgar"
                    width="520"
                    height="390"
                  /> 
                  <Carousel.Caption>
                    <h8>Susan Polgar Foundation National Open Champion (2019)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={IM}
                    alt="IM"
                    width="450"
                    height="400"
                  /> 
                  <Carousel.Caption>
                    <h8>North American U-20 Champion - 2020 (International Master Title + Grandmaster Norm)</h8>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      );
    };

export default Chess;