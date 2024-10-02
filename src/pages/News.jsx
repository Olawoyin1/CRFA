import React from "react";
import { IoShareSocial } from "react-icons/io5";

const News = () => {
  return (
    <div id="news">
      <div className="container2">
        <div class="main-news py-5">
          <div class="container">
            <div className="news-header mb-4 d-flex align-items-center justify-content-between">
              <p className="fw-bold">ALL NEWS</p>
              <div class="dropdown">
                <p
                  class="fw-bold dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORIES
                </p>
                <ul
                  class="dropdown-menu p-0 g-4"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a class="dropdown-item" href="#0">
                      ISL
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#1">
                      PRE-SEASON
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#2">
                      DINO
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#2">
                      FRIENDLY
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col overflow-hidden">
                <div class="news-card bg-white">
                  <div className="card-image">
                    <img src="../Images/matchday-1.jpg" alt="" />
                  </div>

                  <div class="card-body ">
                    <p className="text-muted time mt-3">1 HOURS AGO</p>
                    <p className="topic fw-bold my-2">ISL MATCHWEEK ONE</p>
                    <p class="card-text">
                      The Isco Sport League (ISL) kicked off its
                      much-anticipated season with Matchweek One, showcasing
                      exhilarating performances...{" "}
                    </p>
                    <div class="d-flex share justify-content-between align-items-center">
                      <p className="badge bg-primary">ISL</p>
                      <small class="text-muted">
                        <IoShareSocial size={20} />
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col overflow-hidden">
                <div class="news-card bg-white">
                  <div className="card-image">
                    <img src="../Images/squad-list.jpeg" alt="" />
                  </div>

                  <div class="card-body ">
                    <p className="text-muted time mt-3">30 DAYS AGO</p>
                    <p className="topic fw-bold my-2">
                      ISCO SPORT LEAGUE SQUAD LIST
                    </p>
                    <p class="card-text">
                      Classic Royals FA players representing the team in the ISL
                      LEAGUE...
                    </p>
                    <div class="d-flex share justify-content-between align-items-center">
                      <p className="badge bg-primary">ISL</p>
                      <small class="text-muted">
                        <IoShareSocial size={20} />
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col overflow-hidden">
                <div class="news-card bg-white">
                  <div className="card-image">
                    <img src="../Images/trial.jpg" alt="" />
                  </div>

                  <div class="card-body ">
                    <p className="text-muted time mt-3">30 DAYS AGO</p>
                    <p className="topic fw-bold my-2">CLASSIC ROYALS TRIAL</p>
                    <p class="card-text">
                      Your Chance to Shine: Classic Royals Invite Talented
                      Players for Open Trials...
                    </p>
                    <div class="d-flex share justify-content-between align-items-center">
                      <p className="badge bg-primary">CRFA</p>
                      <small class="text-muted">
                        <IoShareSocial size={20} />
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col overflow-hidden">
                <div class="news-card bg-white">
                  <div className="card-image">
                    <img src="../Images/ps1.jpg" alt="" />
                  </div>

                  <div class="card-body ">
                    <p className="text-muted time mt-3">28 DAYS AGO</p>
                    <p className="topic fw-bold my-2">
                      CLASSIC ROYALS VS MARLINZ FC PRE SEASON MATCH
                    </p>
                    <p class="card-text">
                      Classic Royals host Marlinz ahead of the ISL
                    </p>
                    <div class="d-flex share justify-content-between align-items-center">
                      <p className="badge bg-primary">PRE SEASON</p>
                      <small class="text-muted">
                        <IoShareSocial size={20} />
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col overflow-hidden">
                <div class="news-card bg-white">
                  <div className="card-image">
                    <img src="../Images/ps2.jpg" alt="" />
                  </div>

                  <div class="card-body ">
                    <p className="text-muted time mt-3">26 DAYS AGO</p>
                    <p className="topic fw-bold my-2">
                      CLASSIC ROYALS VS PANTHERS FC PRE SEASON MATCH
                    </p>
                    <p class="card-text">
                      Classic Royals host Panther ahead of the ISL{" "}
                    </p>
                    <div class="d-flex share justify-content-between align-items-center">
                      <p className="badge bg-primary">PRE SEASON</p>
                      <small class="text-muted">
                        <IoShareSocial size={20} />
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col overflow-hidden">
                <div class="news-card bg-white">
                  <div className="card-image">
                    <img src="../Images/ps3.jpg" alt="" />
                  </div>

                  <div class="card-body ">
                    <p className="text-muted time mt-3">29 DAYS AGO</p>
                    <p className="topic fw-bold my-2">
                      CLASSIC ROYALS VS TOWN HALL FC PRE SEASON MATCH
                    </p>
                    <p class="card-text">
                      Classic Royals host Town Hall ahead of the ISL
                    </p>
                    <div class="d-flex share justify-content-between align-items-center">
                      <p className="badge bg-primary">PRE SEASON</p>
                      <small class="text-muted">
                        <IoShareSocial size={20} />
                      </small>
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

export default News;
