import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEamilIsValid =
    enteredEmail.trim() !== "" && enteredEmail.trim().includes("@");
  const EamilInputIsInvalid = !enteredEamilIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEamilIsValid) {
    formIsValid = true;
  }

  //Name
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  //Email
  const EamilInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const EmailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredEmail("");

    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
    // nameInputRef.current.value = ""; ==> 좋은 방법이 아니며 DOM 조작은 React로만 해야함.
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const EmailInputClasses = EamilInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={EmailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          type="eamil"
          id="email"
          onChange={EamilInputChangeHandler}
          onBlur={EmailInputBlurHandler}
          value={enteredEmail}
        />
        {EamilInputIsInvalid && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
