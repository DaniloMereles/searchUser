import React from 'react';
import { User } from '../user/User';
import { Form } from '../form/Form';
import './userList.css';
export const UserList = ({ users, searchUsers }) => {
  return (
    <div className="userList">
      <Form searchUsers={searchUsers} />

      <div className="userList__users">
        {users.map((user) => (
          <User key={user.name.first} user={user} />
        ))}
      </div>
    </div>
  );
};
