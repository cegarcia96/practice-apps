import {React, useState, useEffect} from "react";
import AddressForm from "./AddressForm.jsx"

const UserForm = () => {

  const [userFormStatus, setUserFormStatus] = useState(true);

  const handleNext = (event, formStatus, setFormStatus) => {
    event.preventDefault();
    formStatus ? setFormStatus(false) : setFormStatus(true);
  }

  return (
    userFormStatus ?
      <div className="user-form-div">
        <form>
          <label>Name</label>
          <input type="text"></input>
          <label>email</label>
          <input type="email"></input>
          <label>Password</label>
          <input type="password"></input>
          <input type="submit" value="Next" onClick={(event) => handleNext(event, userFormStatus, setUserFormStatus)}></input>
        </form>
      </div> : <AddressForm handleNext={handleNext} />
  )
}

export default UserForm;