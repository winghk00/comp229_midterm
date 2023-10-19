import { useState } from "react";
import "./new_product.css";

export default function Validate() {
  
  const [nameValue, setNameValue] = useState('');
  const [descValue, setDescValue] = useState(null);
  const [cateValue, setCateValue] = useState(null);
  const [quanValue, setQuanValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [inputError, setInputError] = useState(null);

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleDescChange = (e) => {
    setDescValue(e.target.value);
  };
  const handleCateChange = (e) => {
    setCateValue(e.target.value);
  };

  function handlePriceChange(event) {
    const value = event.target.value;
    setPriceValue(value);

    if (isNaN(value)) {
      setInputError("Price must be number");
    } else {
      setInputError(null);
    }
  }

  function handleQuanChange(event) {
    const value = event.target.value;
    setQuanValue(value);

    if (isNaN(value)) {
      setInputError("Quantity must be number");
    } else {
      if (!(value % 1 === 0)) {
        setInputError("Quantity must be whole number");
      } else {
        setInputError(null);
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    var hasError = false;
    if (isNaN(priceValue)) {
      setInputError("Price must be number");
      hasError = true;
    } else {
      setInputError(null);
    }
    if (isNaN(quanValue)) {
      setInputError("Quantity must be number");
      hasError = true;
    } else {
      if (!(quanValue % 1 === 0)) {
        setInputError("Quantity must be whole number");
        hasError = true;
      } else {
        setInputError(null);
      }
    }
    if (!hasError){
      alert("Name value:" + nameValue);
      alert("Description value:" + descValue);
      alert("Category value:" + cateValue);
      alert("Quantity value:" + quanValue);
      alert("Price value:" + priceValue);
      console.log("Name value:", nameValue);
      console.log("Description value:", descValue);
      console.log("Category value:", cateValue);
      console.log("Quantity value:", quanValue);
      console.log("Price value:", priceValue);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="head3">New Product</h3>
      <label>
        <p className="text-color">Name:</p>
        <input className="text-line" type="text" value={nameValue} onChange={handleNameChange}  />
      </label>
      <label>
        <p className="text-color">Description:</p>
        <input className="text-line" type="text" value={descValue} onChange={handleDescChange}/>
      </label>
      <label>
        <p className="text-color">Category:</p>
        <input className="text-line" type="text" value={cateValue} onChange={handleCateChange}/>
      </label>
      <label>
        <p className="text-color">Quantity:</p>
        <input className="text-line" type="text" value={quanValue} onChange={handleQuanChange} />
      </label>
      <label>
        <p className="text-color">Price:</p>
        <input className="text-line" type="text" value={priceValue} onChange={handlePriceChange} />
      </label>
      {inputError && <div style={{ color: "red" }}>{inputError}</div>}
      <br></br>
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
}
