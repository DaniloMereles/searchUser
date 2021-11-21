import React from 'react';
import './user.css';
export const User = ({ user }) => {
  return (
    <div className="user">
      <img src={user.picture.medium} alt="user" className="user__avatar" />

      <div className="user__details">
        <h2 className="user__name">
          {`${user.name.first} - ${user.name.last}`}
        </h2>
        <h3 className="user__email"> {user.email} </h3>
        <p className="user__location">
          {`${user.location.city} - ${user.location.country} `}
        </p>
      </div>
    </div>
  );
};
