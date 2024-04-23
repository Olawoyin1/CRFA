import React from "react";

const About = () => {
  return (
    <div className="my-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_image">
              <img src="../../Images/about.jpg" alt="about Img" />
            </div>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <h2 className="fw-bold mb-3 dash">About Us</h2>
            <div className="about_text">
              <p>
                welcome to Classic Royals Football Academy – where every kick counts and every dream matters. We're not just a team; we're a family, bound by our love for the game and our desire to see each other succeed.<br />
                  <br />
                  At Classic Royals, our coaches aren't just here to teach you skills; they're here to cheer you on, pick you up when you're down, and celebrate your victories like they're their own. We believe in the power of teamwork, dedication, and a good old-fashioned love for football.
                  <br />
                  <br />
                  Whether you're just starting out or you've been playing since you could walk, there's a place for you here at Classic Royals. So, come join us on the field, where we'll work hard, play hard, and have a whole lot of fun along the way. Because at Classic Royals Football Academy, we're not just building players – we're building champions, both on and off the pitch.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="history py-5">
        <div className="container">
          <h3 className="fw-bold text-center">Our History</h3>

          <section class="timeline-section">
            <div class="timeline-items">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2015</div>
                <div class="timeline-content">
                  <h3>Kickoff</h3>
                  <p>
                  Back in 2020, Classic Royals Football Academy began as a dream shared among students on OAU CAMPUS. With nothing but a few soccer balls, a patch of grass, and a whole lot of determination, we kicked off our journey to create something special – a place where Students could play the game they loved and become the best they could be.{" "}
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2016</div>
                <div class="timeline-content">
                  <h3>Unforgetable Games</h3>
                  <p>
                  Over the years, we've had our fair share of unforgettable moments on the field. From heart-stopping comebacks to glorious victories, each game has been a chapter in our story. Who could forget the match we played aginst PJT FA at IFE ANGLICAN during the ISL, when the whole team erupted in cheers and celebrations?{" "}
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2017</div>
                <div class="timeline-content">
                  <h3>Constant Improvement</h3>
                  <p>
                  We've always believed in getting better every day, both as individuals and as a team. Whether it's tweaking our training drills, upgrading our facilities, we're constantly pushing ourselves to reach new heights. It's this drive for improvement that's kept us at the top of our game.{" "}
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2018</div>
                <div class="timeline-content">
                  <h3>Now</h3>
                  <p>
                  Today, Classic Royals Football Academy is more than just a club – it's a family. From our youngest players to our seasoned veterans, we're united by our love for the game and our desire to see each other succeed. Our fields are alive with the sound of laughter and the thud of soccer balls, as we continue to chase our dreams together.{" "}
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2019</div>
                <div class="timeline-content">
                  <h3>Best Moment</h3>
                  <p>
                  While there have been many highlights along the way, one moment stands out above the rest. It was , a victory that wasn't just about winning a game but about coming together as a team and as a community. It's a memory we'll cherish forever.{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="officers pb-5">
        <div className="container2">
          <h3 className="fw-bold text-center">Club Officers</h3>
          <div className="row row-cols-1 row-cols-sm-2 g-3 my-3 row-cols-md-3">
            <div className="col">
              <div>
                <div className="card card-2 shadow">
                  <div className="player_image">
                  <img src="../Images/crfa_logo.png" className="no-img" alt="" />
                  </div>
                  <div className="player_name p-3">
                    <h6 className="fw-bold player_number">Team Captain</h6>
                    <h6 className="fw-bold text-uppercase">Oniade Joshua</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div>
                <div className="card card-2 shadow">
                  <div className="player_image">
                    <img src="../Images/crfa_logo.png" className="no-img" alt="" />
                  </div>
                  <div className="player_name p-3">
                    <h6 className="fw-bold player_number">
                      Team Assistant Captain
                    </h6>
                    <h6 className="fw-bold text-uppercase">Surname Loba</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div>
                <div className="card card-2 shadow">
                  <div className="player_image">
                  <img src="../Images/crfa_logo.png" className="no-img" alt="" />
                  </div>
                  <div className="player_name p-3">
                    <h6 className="fw-bold player_number">Other</h6>
                    <h6 className="fw-bold text-uppercase">Lana Caleb</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="honors py-5">
        <div className="container">
          <h3 className="fw-bold text-center">Honors</h3>
          <p className="text-center">
            The excellence of our services has been proved by the following
            awards:
          </p>
          <div className="our_honors py-3">
            <div className="row row-cols-1 row-cols-sm-2 g-3 row-cols-md-3 row-cols-lg-4">
              <div className="col">
                <div>
                  <div className="card-2 card-3 d-flex align-items-center justify-content-center flex-column p-2">
                    <div className="honor-image d-flex align-items-center justify-content-center">
                      <img src="../Images/marathon.png" alt="" />
                    </div>
                    <div className="p-3">
                      <small className="fw-bold">Marathon Cup Runners up</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div>
                  <div className="card-2 card-3 d-flex align-items-center justify-content-center flex-column p-2 ">
                    <div className="honor-image d-flex align-items-center justify-content-center">
                      <img src="../Images/dino.png" alt="" />
                    </div>
                    <div className="p-3">
                      <small className="fw-bold">Dino Unity</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div>
                  <div className="card-2 card-3 d-flex align-items-center justify-content-center flex-column p-2 ">
                    <div className="honor-image d-flex align-items-center justify-content-center">
                      <img src="../Images/marathon.png" alt="" />
                    </div>
                    <div className="p-3">
                      <small className="fw-bold">Marathon Cup Runners up</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div>
                  <div className="card-2 card-3 d-flex align-items-center justify-content-center flex-column p-2 ">
                    <div className="honor-image d-flex align-items-center justify-content-center">
                      <img src="../Images/isl.png" alt="" />
                    </div>
                    <div className="p-3">
                      <small className="fw-bold">Isco Sport League</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
