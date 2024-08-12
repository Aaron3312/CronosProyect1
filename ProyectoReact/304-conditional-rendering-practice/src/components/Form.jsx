import React from "react";

function buttonName(userIsRegistered) {
  return userIsRegistered ? "Login" : "Register";
}

function confirmPassword(userIsRegistered) {
  return userIsRegistered ? null : <input type="password" placeholder="Confirm Password" />;
}

function confirmPasswordLarge(userIsRegistered) {
  if (userIsRegistered) {
    return null;
  } else {
    return <input type="password" placeholder="Confirm Password" />;
  }
}


function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {confirmPasswordLarge(props.userIsRegistered)}
      <button type="submit">{buttonName(props.userIsRegistered)}</button>
    </form>
  );
}

export default Form;
 