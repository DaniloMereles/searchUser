import React from 'react';
import './form.css';
export const Form = ({ searchUsers }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert('No se puede hacer submir :)');
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="write a username"
        name="input"
        onChange={(e) => searchUsers(e.target.value)}
      />
    </form>
  );
};
