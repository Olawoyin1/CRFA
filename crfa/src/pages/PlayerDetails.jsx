import React from "react";
import { useParams } from "react-router-dom";
import CRFAPlayers from "../Data/PlayerData";
// import  from "../Data/PlayerData";
import { Link } from "react-router-dom";

const PlayerDetails = () => {
  const { lastname } = useParams();
  console.log(lastname);
  const player = CRFAPlayers.find((item) => item.lastname === lastname);
  // console.log(player);

  const OP = CRFAPlayers.filter(
    (item) =>
      item.position === player.position && item.lastname != player.lastname
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

      <div className="p_profile shadow d-flex align-items-center pt-3 m-0 justify-content-center gap-5">
        <p>Profile</p>
        <p>Socials</p>
      </div>

      <div class="bio">
        <div class="container2">
          <div class="row my-4 py-3">
            <div class="col-md-7">
              <h3 class="fw-bold my-3 text-primary">BIO</h3>

              <div class="player_bio">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                  porro error neque, temporibus cupiditate reiciendis ratione
                  aperiam itaque mollitia dolor eligendi ipsa quaerat hic quidem
                  autem, accusantium laboriosam? Molestiae, explicabo? <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda quae, omnis ducimus numquam aperiam deserunt
                  blanditiis, consequuntur cupiditate magni illo fuga dolorem
                  soluta tenetur distinctio veritatis dolores nostrum deleniti
                  porro, recusandae explicabo totam doloribus quia sit. Id,
                  distinctio. Voluptatem beatae quisquam ut at explicabo tempora
                  nulla sit ipsum corrupti dicta. <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam natus delectus atque nisi possimus quasi, nemo ad
                  libero placeat ex.
                </p>
              </div>
            </div>

            <div class="col-md-5">
              <h3 class="fw-bold text-primary my-3">INFO</h3>

              <div>
                <small class="text-muted">Date of Birth</small>
                <h4 class="fw-bold ans">22-04-2022</h4>
                <hr class="mt-1" width="300px" />
              </div>

              <div>
                <small class="text-muted">Position</small>
                <h4 class="fw-bold ans">{player.position}</h4>
                <hr class="mt-1" width="300px" />
              </div>

              <div>
                <small class="text-muted">Joined Classic</small>
                <h4 class="fw-bold ans">22-04-2022</h4>
                <hr class="mt-1" width="300px" />
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
          <div className="row row-cols-1 row-cols-sm-2 g-3 my-3 row-cols-md-3 row-cols-lg-4">
            {show.map((others) => {
              return (
                <div className="col">
                  <a href={`${others.lastname}`} to={`${others.lastname}`}>
                    <div className="card shadow">
                      <div className="player_image">
                        {others.image ? (
                          <img src={`../../${others.image}`} alt="..." />
                        ) : (
                          <img src="../../Images/unknown.png" alt="..." />
                        )}
                      </div>
                      <div className="player_name p-3">
                        <h6 className="fw-bold player_number">
                          {others.number}
                        </h6>
                        <h6 className="fw-bold text-uppercase">
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
