import {React, useState, useEffect} from "react";
import AddressForm from "./AddressForm.jsx"

const UserForm = () => {

  const [userFormStatus, setUserFormStatus] = useState(true);

  const [userFormInfo, setUserFormInfo] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleNext = (event, formStatus, setFormStatus) => {
    event.preventDefault();
    formStatus ? setFormStatus(false) : setFormStatus(true);
  }

  return (
    (userFormStatus ?
      <div className="user-form-div">
        <form>
          <label>Name</label>
          <input type="text" value={userFormInfo.name} onChange={(event) => setUserFormInfo({...userFormInfo, name: event.target.value})}></input>
          <label>email</label>
          <input type="email" value={userFormInfo.email} onChange={(event) => setUserFormInfo({...userFormInfo, email: event.target.value})}></input>
          <label>Password</label>
          <input type="password" value={userFormInfo.password} onChange={(event) => setUserFormInfo({...userFormInfo, password: event.target.value})}></input>
          <input type="submit" value="Next" onClick={(event) => handleNext(event, userFormStatus, setUserFormStatus)}></input>
        </form>
      </div> : <AddressForm handleNext={handleNext} userInfo={userFormInfo} />)
  )
}

export default UserForm;