import React, { useState, useEffect, Profiler } from "react";
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Press = () => {
return (
    <div id="press" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Press</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                <strong />
<a href="https://www.smdp.com/local-beats-grandmaster-to-win-national-chess-tournament/193576" className="links">Local Beats Grandmaster to Win National Chess Tournament [Santa Monica Daily Press- June 29, 2020]</a>
<br/><br/>
<a href="https://new.uschess.org/news/danial-asaria-hs-senior-online-rapids?fbclid=IwAR1j8ip8fpeqMw8bajjEUwsHqp9HggiCnl1fkqCySAUP8oQDOKD7IukKKqQ" className="links">2020 High School Senior Champion [United States Chess Federation- June 22, 2020]</a>
<br/><br/>
<a href="https://www.askmen.com/career_money/self_improvement/how-learning-chess-can-improve-your-life-and-career.html" className="links">How Learning Chess Can Improve Your Life and Career
Chess Pro Reveals How the Game Can Improve Your Focus, Problem-Solving, and More [AskMen-June 19, 2020]</a>
<br/><br/>
<a href="https://www.thesamohi.com/feature/a-look-at-the-interesting-extracurriculars-around-samo" className="links">A Look at the Interesting Extracurriculars around Santa Monica High School [SAMOHI Newspaper- November 30, 2019]</a>
<br/><br/>
<a href="http://www.scchess.com/rank_and_file_issues/F&F.2019-Spring-&-Summer.pdf#page=30" className="links">Winner of 2018 American Open (Youngest Champion in History) [Southern California Premier Chess Magazine- Spring 2019] </a>
<br/><br/>
<a href="https://www.smdp.com/local-student-wins-national-chess-title/155357?fbclid=IwAR2aa2mTogQU9Zpd3Vn7d4AnxRX4pqwFU4yEtlYP8IwzL---pHd3DH3-16c" className="links">Local Student Wins National Chess Title [Santa Monica Daily Press- May 20, 2016]</a>
<br/><br/>
<a href="https://ismailimail.blog/2016/01/26/danial-asaria-lincoln-middle-school-student-wins-third-title-at-national-chess-championship/" className="links">Danial Asaria: Lincoln Middle School Student Wins Third Title at National Chess Championship [IsmailiMail- January 26, 2016] </a>
<br/><br/>
<a href="https://www.surfsantamonica.com/ssm_site/the_lookout/news/News-2016/January-2016/01_26_2016_Santa_Monica_Student_Is_National_Chess_Champ.html?fbclid=IwAR22tsooqLagJrL7nwgRrKD3okvvV6gJkpxW-bJvN8eIOk8BoBSKWSzaDZ8" className="links">Santa Monica Student Is National Chess Champion [Santa Monica Lookout- January 26, 2016]</a>
<br/><br/>
<a href="http://www.chessdom.com/national-k-12-grade-championships-2015-grade-8/?fbclid=IwAR10LiKtWSjVEqPaoo9jLJrJAQkBnq7_XcAGgSZpA7jvFYsC5jHS52phRyg" className="links">National K-12 Grade Championships 2015 Grade 8 Champion [Chessdom- December 21, 2015]</a> 
<br/>< br/>
<a href="https://ismailimail.blog/2012/05/21/danial-asaria-won-co-championship-3rd-on-tiebreaks-and-scholarship-award-in-2012-national-elementary-k-6-chess-championship/?fbclid=IwAR0NOoxFZ53U81T_1F1ztRdhTQI2N0lEN_45_81zapjO--f1LrRJkb3yXDM/" className="links">Danial Asaria wins Co-Championship and Scholarship award in 2012 National Elementary (K-6) Chess Championship [IsmailiMail- May 21, 2012]</a>
<br/><br/>
<a href="https://ismailimail.blog/2011/03/24/danial-asaria-won-first-place-in-southern-california-super-states-2011-chess-championship/?fbclid=IwAR1ZgVKlzUjJCS_KAerx8jXFY2-r374OSy6GvMdqn_Hat6TSJgqntrf8d50/" className="links">Danial Asaria wins First Place in Southern California Super States 2011 Chess Championship [IsmailiMail- March 24, 2011]</a>
<br/><br/>
<a href="https://ismailimail.blog/2010/12/18/danial-asaria-2nd-place-2010-national-championships-chess-tournament/?fbclid=IwAR0Vrlfg7amuA6Fm0A2sx9VxDeVd_em8B8dikav0hLS4WUjGRzQwgdBSUEo/" className="links">Danial Asaria: 2nd place 2010 National Championships Chess Tournament [IsmailiMail- December 18, 2010]</a>
<br/><br/>
<a href="https://ismailimail.blog/2011/03/24/danial-asaria-won-first-place-in-southern-california-super-states-2011-chess-championship/?fbclid=IwAR1ZgVKlzUjJCS_KAerx8jXFY2-r374OSy6GvMdqn_Hat6TSJgqntrf8d50/" className="links">Danial Asaria wins First Place in Southern California Super States 2011 Chess Championship [IsmailiMail- March 24, 2011]</a>
<br/><br/>
<a href="https://the.ismaili/global/developing-childs-mind-through-the-game-chess" className="links">Developing a Child’s Mind Through the Game of Chess [Ismaili Global- June 21, 2011]</a>
<br/><br/>
<a href="https://www.latimes.com/archives/la-xpm-2010-sep-12-la-ca-0912-chess-20100912-story.html" className="links">U-1400 First Prize [Los Angeles Times- September 12, 2010]</a>
                    {/*<img
                        // className="border border-secondary rounded-circle"
                        src={Dell}
                        alt="dell technologies logo"
                        width="420"
                        height="70"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Software Engineer Intern  
                        <br/>
                        June - July 2020
                    </p>
                    {/* <h3>Dell Technologies</h3> 
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Boeing}
                        alt="boeing logo"
                        width="300"
                        height="80"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Software Engineer Intern  
                        <br/>
                        May - August 2019
                    </p>
                    {/* <h3>Boeing</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Press;