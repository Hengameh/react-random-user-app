import React from "react";

function UserListItem({ user, onClick }) {
  const handleClick = () => {
    onClick(user.id);
  };

  return (
    <li key={user.id} className={`${user.username} user`}>
      <div className="image-container">
        <img
          className="profile-image shadow"
          src={user.profileImage}
          alt={user.lastName}
        />
      </div>

      <div className="user-info">
        <h3 className="user-name">
          {user.gender === "female" ? (
            <i className={`${user.gender} fa fa-female`}></i>
          ) : (
            <i className={`${user.gender} fa fa-male`}></i>
          )}
          {user.name} {user.lastName}{" "}
        </h3>
        <i className="email">{user.email}</i>
        <span className="location">
          {user.city}, {user.state}, {user.country}{" "}
          <span style={{ color: "red" }}>
            {user.nationality === "US" ? (
              <img
                className="country-flag"
                src={`http://www.geonames.org/flags/x/us.gif`}
                alt="nationality - US Flag"
              />
            ) : (
              ""
            )}
          </span>
        </span>
      </div>

      <button className="delete-btn fa fa-trash" onClick={handleClick}>
        {" "}
        <span className="content">Delete</span>
      </button>
      <hr className="horizental-line" />
    </li>
  );
}

export default UserListItem;
