import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import Styles from "./CourseInput.module.css";

// import styled from "styled-components";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     // border: 1px solid #ccc;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#fad0ec" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   // &.invalid input {
//   //   border-color: red;
//   //   background: rgb(247, 188, 188);
//   // }

//   // &.invalid label {
//   //   color: red;
//   // }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // trim() removes white spaces
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      <div
        className={`${Styles["form-control"]} ${!isValid && Styles.invalid}`}
      >
        {/* <FormControl className={!isValid && "invalid"}> */}
        {/* <FormControl invalid={!isValid}> */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* </FormControl> */}
        {/* inline css below */}
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        /> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
