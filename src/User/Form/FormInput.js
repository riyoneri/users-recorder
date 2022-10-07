import { useState } from "react";

import styles from "./FormInput.module.css";

const FormInput = props => {
  const [userName, setUsername] = useState("");
  const [age, setAge] = useState("");

  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [ageErrorMessage, setAgeErrorMessage] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  const userNameInputHandler = (event) => {
    setUsername(event.target.value);
    setUserNameError(false);
  };

  const ageInputHandler = (event) => {
    setAge(event.target.value);
    setAgeError(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 && age < 0) {
      setUserNameError(true);
      setUserNameErrorMessage("Madafaka put in your username");
      
      setAgeError(true);
      setAgeErrorMessage("Age must be > 0");
    } else if (userName.trim().length === 0 && age === "") {
      setUserNameError(true);
      setUserNameErrorMessage("Madafaka put in your username");
      
      setAgeError(true);
      setAgeErrorMessage("Enter your Age please");
    } else if (userName.trim().length === 0) {
      setUserNameError(true);
      setUserNameErrorMessage("Madafaka put in your username");
    } else if (age < 0) {
      setAgeError(true);
      setAgeErrorMessage("Age must be > 0");
    } else if (age === "") {
      setAgeError(true);
      setAgeErrorMessage("Enter your Age please");
    } else {
      props.addUser({
        name: userName,
        age: age
      })

      setUsername('')
      setAge('')
    }
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <div>
        <label>Username</label>
        <input
          value={userName}
          type="text"
          onChange={userNameInputHandler}
          className={userNameError ? styles.invalid : ""}
        />
        {userNameError && <span>{userNameErrorMessage}</span>}
      </div>

      <div>
        <label>Age (Years)</label>
        <input
          value={age}
          type="number"
          step="0.001"
          className={ageError ? styles.invalid : ""}
          onChange={ageInputHandler}
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
