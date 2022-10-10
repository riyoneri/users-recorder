import { useState, useRef } from "react";

import styles from "./FormInput.module.css";

const FormInput = props => {
  // const [userName, setUsername] = useState("");
  // const [age, setAge] = useState("");

  const userName = useRef()
  const age = useRef()

  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [ageErrorMessage, setAgeErrorMessage] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const userNameInputHandler = () => {
    setUserNameError(false);
  };

  const ageInputHandler = () => {
    setAgeError(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.current.value.trim().length === 0 && age.current.value < 0) {
      setUserNameError(true);
      setUserNameErrorMessage("Madafaka put in your username");
      
      setAgeError(true);
      setAgeErrorMessage("Age must be > 0");
    } else if (userName.current.value.trim().length === 0 && age.current.value === "") {
      setUserNameError(true);
      setUserNameErrorMessage("Madafaka put in your username");
      
      setAgeError(true);
      setAgeErrorMessage("Enter your Age please");
    } else if (userName.current.value.trim().length === 0) {
      setUserNameError(true);
      setUserNameErrorMessage("Madafaka put in your username");
    } else if (age.current.value < 0) {
      setAgeError(true);
      setAgeErrorMessage("Age must be > 0");
    } else if (age.current.value === "") {
      setAgeError(true);
      setAgeErrorMessage("Enter your Age please");
    } else {
      props.addUser({
        name: userName.current.value,
        age: age.current.value
      })
      userName.current.value = ''
      age.current.value = ''
    }
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          onChange={userNameInputHandler}
          className={userNameError ? styles.invalid : ""}
          ref={userName}
        />
        {userNameError && <span>{userNameErrorMessage}</span>}
      </div>

      <div>
        <label>Age (Years)</label>
        <input
          type="number"
          step="0.001"
          className={ageError ? styles.invalid : ""}
          onChange={ageInputHandler}
          ref={age}
        />
        {ageError && <span>{ageErrorMessage}</span>}
      </div>

      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default FormInput;
