import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tilty from "react-tilty";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <Tilty
      className="tilty"
      glare
      scale={1.1}
      maxGlare={0.5}
      speed={500}
      max={50}
      gyroscope={false}
    >
      <div className="card text-center card-tilt">
        <img
          src={avatar_url}
          alt=""
          className="round-img user-tilt"
          style={{ width: "60px" }}
        />
        <h3 className="user-tilt">{login}</h3>
        <div>
          <Link
            to={`/user/${login}`}
            className="btn btn-dark btn-sm my-1 btn-tilt custom-btn btn-5"
          >
            More
          </Link>
        </div>
      </div>
    </Tilty>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
