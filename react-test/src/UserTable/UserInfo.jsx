import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer";
import TableContainer from "./TableContainer";

const UserInfo = () => {
  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    const savedValue = localStorage.getItem("formInput");
    if (savedValue) {
      try {
        const parsedData = JSON.parse(savedValue);
        setInputValue(parsedData);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return (
    <>
      <FormContainer setInputValue={setInputValue} />
      <TableContainer inputValue={inputValue} setInputValue={setInputValue} />
    </>
  );
};

export default UserInfo;
