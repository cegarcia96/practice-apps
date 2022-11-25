import {React, useState, useEffect} from "react";
import PaymentForm from "./PaymentForm.jsx"

const AddressForm = ({ handleNext }) => {

  const [AddressFormStatus, setAddressFormStatus] = useState(true);

  return (
    AddressFormStatus ?
      <div className="address-form-div">
        <form>
          <label>Address 1</label>
          <input type="text"></input>
          <label>Address 2</label>
          <input type="text"></input>
          <label>City</label>
          <input type="text"></input>
          <label>State</label>
          <input type="text"></input>
          <input type="submit" value="Next" onClick={(event) => {handleNext(event, AddressFormStatus, setAddressFormStatus)}}></input>
        </form>
      </div> : <PaymentForm handleNext={handleNext}/>
  )
}

export default AddressForm;