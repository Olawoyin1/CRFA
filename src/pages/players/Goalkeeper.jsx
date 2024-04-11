import React from "react";
import { Link } from "react-router-dom";

const Goalkeeper = ({ lastname, firstname, DOB, number, img }) => {
  return (
    <div className="col">
      <Link to={`${lastname}`}>
        <div className="card">
          <div className="player_image">
            {img ? (
              <img src={img} alt="..." />
            ) : (
              <img src="./Images/unknown.png" alt="..." />
            )}
          </div>
          <div className="player_name p-sm-3 p-2 mb-0">
            <h6 className="fw-bold player_number">{number}</h6>
            <h6 className="fw-sm-bold fw-bolder m-0 text-uppercase">
              {lastname} <br />
              {firstname}
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Goalkeeper;
