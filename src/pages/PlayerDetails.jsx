import React from "react";
import { useParams } from "react-router-dom";
import CRFAPlayers from "../Data/PlayerData";
// import  from "../Data/PlayerData";

const PlayerDetails = () => {
  const { id } = useParams();
  const player = CRFAPlayers.find((item) => item.id === id);

  const OP = CRFAPlayers.filter(
    (item) =>
      item.position === player.position && item.lastname !== player.lastname
  );

  const show = OP.filter((item, index) => index < 4);

  return (
    <div>
      <div className="player_dp">
        <div className="container">
          <h1 className="p-number"># {player.number}</h1>
        </div>
        <div className="d-flex flex-wrap main_dp align-items-center mx-auto">
          <div className="player_photo">
            {player.image_dp ? (
              <img src={`../${player.image_dp}`} alt="" />
            ) : (
              <img src="../../Images/crfa_logo.png" alt="" />
            )}
          </div>
          <div className="p_name">
            <span className="cus">{player.lastname}</span>
            <h1 className="custom">{player.firstname}</h1>
          </div>
        </div>
      </div>

      <div className="p_profile m-0 shadow d-flex align-items-center p-2  m-0 justify-content-center gap-5">
        <p>Profile</p>
        <p>Socials</p>
      </div>

      <div class="bio">
        <div class="container2">
          <div class="row my-4 m-0 py-3">
            <div class="col-md-7">
              <h3 class="fw-bold my-3 text-primary">BIO</h3>

              <div class="player_bio" style={{ whiteSpace: 'pre-wrap' }}>
                <p> 
                  {player.bio}
                </p>
              </div>
            </div>

            <div class="col-md-5">
              <h3 class="fw-bold text-primary my-3">INFO</h3>

              <div>
                <small class="text-muted">Date of Birth</small>
                <h4 class="fw-bold ans">{player.DOB}</h4>
                <hr class="mt-1" />
              </div>

              <div>
                <small class="text-muted">Position</small>
                <h4 class="fw-bold ans">{player.position}</h4>
                <hr class="mt-1"  />
              </div>

              <div>
                <small class="text-muted">Joined Classic</small>
                <h4 class="fw-bold ans">{player.joined}</h4>
                <hr class="mt-1"  />
              </div>

              <div>
                <small class="text-muted">Nationality</small>
                <h4 class="fw-bold ans">Nigeria</h4>
                {/* <hr class="mt-1" width="300px" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="others py-5">
        <div className="container2">
          <h3 className="fw-bold text-uppercase">OTHER {player.position}</h3>
          <div className="row row-cols-2 row-cols-sm-3 g-3 row-cols-lg-4">
            {show.map((others) => {
              return (
                <div className="col">
                  <a href={`${others.id}`} to={`${others.id}`}>
                    <div className="card shadow">
                      <div className="player_image">
                        {others.image ? (
                          <img src={`../../${others.image}`} alt="..." />
                        ) : (
                          <img src="../../Images/crfa_logo.png" className="no-img" alt="..." />
                        )}
                      </div>
                      <div className="player_name p-sm-3 p-2 mb-0">
                        <h6 className="fw-bold player_number">
                          {others.number}
                        </h6>
                        <h6 className="fw-bold m-0 text-uppercase">
                          {others.lastname} <br />
                          {others.firstname}
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
