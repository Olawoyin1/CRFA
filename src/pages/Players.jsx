import React from "react";
import { Link } from "react-router-dom";

import Goalkeeper from "./players/Goalkeeper";
import Defenders from "./players/Defenders";

import Midfielders from "./players/Midfielders";
import Forwards from "./players/Forwards";

export default function Players({ gk, df, mf, fw }) {
  const goalkeepers = gk.map((goalkeeper) => {
    return (
      <Goalkeeper
        key={goalkeeper.id}
        lastname={goalkeeper.lastname}
        firstname={goalkeeper.firstname}
        dob={goalkeeper.DOB}
        number={goalkeeper.number}
        img={goalkeeper.image}
      />
    );
  });

  const defenders = df.map((defender) => {
    return (
      <Defenders
        key={defender.id}
        lastname={defender.lastname}
        firstname={defender.firstname}
        dob={defender.DOB}
        number={defender.number}
        img={defender.image}
      />
    );
  });

  const midfielders = mf.map((midfielder) => {
    return (
      <Midfielders
        key={midfielder.id}
        lastname={midfielder.lastname}
        firstname={midfielder.firstname}
        dob={midfielder.DOB}
        number={midfielder.number}
        img={midfielder.image}
      />
    );
  });

  const forwards = fw.map((forward) => {
    return (
      <Forwards
        key={forward.id}
        id={forward.id}
        lastname={forward.lastname}
        firstname={forward.firstname}
        dob={forward.DOB}
        number={forward.number}
        img={forward.image}
      />
    );
  });

  return (
    <div className="players">
      <div className="container2">
        <h1 className="fw-bold text-primary">PLAYERS</h1>

        <div className="goalkeepers mt-5">
          <h4 className="fw-bold m-0">GOALKEEPERS</h4>
          <hr className="mt-1" />

          <div className="row row-cols-2 row-cols-sm-3 g-3 row-cols-lg-4 ">
            {goalkeepers}
          </div>
        </div>

        <div className="defenders my-5">
          <h4 className="fw-bold m-0">DEFENDERS</h4>
          <hr className="mt-1" />

          <div className="row row-cols-2 row-cols-sm-3 g-3 row-cols-lg-4 ">
            {defenders}
          </div>
        </div>

        <div className="midfielders my-5">
          <h4 className="fw-bold m-0">MIDFIELDERS</h4>
          <hr className="mt-1" />

          <div className="row row-cols-2 row-cols-sm-3 g-3 row-cols-lg-4 ">
            {midfielders}
          </div>
        </div>

        <div className="forwards my-5">
          <h4 className="fw-bold m-0">FORWARDS</h4>
          <hr className="mt-1" />

          <div className="row row-cols-2 row-cols-sm-3 g-3 row-cols-lg-4 ">
            {forwards}
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Players;
