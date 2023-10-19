import React, { useState } from 'react';
import "./new_shop.css";

const MyForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission 
    alert('Name: ' +name)
    alert('Description: ' +description)
    console.log('Name:', name);
    console.log('Description:', description);
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="head3">New Shop</h3>
      <br/>
        <p className="text-color" htmlFor="name">Name:</p>
        <input className="text-line" type="text" id="name" value={name} onChange={handleNameChange} />
      <p></p>
      <br/>
        <p className="text-color" htmlFor="description">Description:</p>
        <input className="text-line" type="text" id="description" value={description} onChange={handleDescriptionChange} />
      <br/>
      <p></p>
      <table>
      <td>
      <button className="button_s" type="submit">SUBMIT</button>
      </td>
      <td>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button">
        CANCEL
      </button>
      </td>
      </table>
    </form>
  );
};

export default MyForm;