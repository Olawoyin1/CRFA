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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                aperiam id labore fugiat. Id dolor ea odit odio, vero quo sed
                hic nesciunt corporis autem ipsam eligendi ratione commodi
                fugiat. <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                quos nulla placeat, nobis nesciunt alias optio illum, tempore
                maxime officiis excepturi, non exercitationem facere officia
                sunt earum rerum. At, sequi!
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
                ipsum quaerat officia atque consequuntur consequatur dicta sint
                itaque rem eveniet, excepturi blanditiis beatae, dolores labore
                modi vero delectus? Vel, ut!
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2016</div>
                <div class="timeline-content">
                  <h3>Unforgetable Games</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2017</div>
                <div class="timeline-content">
                  <h3>Constant Improvement</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2018</div>
                <div class="timeline-content">
                  <h3>Now</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2019</div>
                <div class="timeline-content">
                  <h3>Best Moment</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
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
                    <img src="../Images/unknown.png" alt="" />
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
                    <img src="../Images/unknown.png" alt="" />
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
                    <img src="../Images/carlessi2.png" alt="" />
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
    </div>
  );
};

export default About;
