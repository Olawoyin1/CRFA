import React from "react";
import PlayerCard from "../Components/PlayerCard";

// import { Link } from "react-router-dom";


export default function Players({ gk, df, mf, fw }) {

 

  return (
    <div className="players">
      <div className="container2">
        <h1 className="fw-bold text-primary">PLAYERS</h1>

        <div className="goalkeepers mt-5">
          <h4 className="fw-bold m-0">GOALKEEPERS</h4>
          <hr className="mt-1" />

          <div className="row row-cols-2 row-cols-sm-3 g-3 row-cols-lg-4 ">
            {
              gk.map(item=> {
                return(
                  <PlayerCard data={item} />
                )
              })
            }
          </div>
        </div>

        <div className="defenders my-5">
          <h4 className="fw-bold m-0">DEFENDERS</h4>
          <hr className="mt-1" />

          <div className="row row-cols-2 row-cols-sm-3 g-3 row-cols-lg-4 ">
          {
              df.map(item=> {
                return(
                  <PlayerCard data={item} />
                )
              })
            }
          </div>
        </div>

        <div className="midfielders my-5">
          <h4 className="fw-bold m-0">MIDFIELDERS</h4>
          <hr className="mt-1" />

          <div className="row row-cols-2 row-cols-sm-3 g-3 row-cols-lg-4 ">
            {
              mf.map(item=> {
                return(
                  <PlayerCard data={item} />
                )
              })
            }
          </div>
        </div>

        <div className="forwards my-5">
          <h4 className="fw-bold m-0">FORWARDS</h4>
          <hr className="mt-1" />

          <div className="row row-cols-2 row-cols-sm-3 g-3 row-cols-lg-4 ">
            {
              fw.map(item=> {
                return(
                  <PlayerCard data={item} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Players;
