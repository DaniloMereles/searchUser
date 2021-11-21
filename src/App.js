import React, { useState, useEffect } from 'react';
import './style.css';
import { UserList } from './components/userList/UserList';
export default function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const searchUsers = (name) => {
    const filtered = users.filter((user) => user.name.first.includes(name));
    setFilteredUsers(filtered);
  };

  const getUsers = async () => {
    const user = await fetch('https://randomuser.me/api/?results=10');
    const userJson = await user.json();
    console.log(userJson.results);
    setUsers(userJson.results);
    setFilteredUsers(userJson.results);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <UserList searchUsers={searchUsers} users={filteredUsers} />
    </div>
  );
}
