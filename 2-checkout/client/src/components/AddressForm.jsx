import {React, useState, useEffect} from "react";
import PaymentForm from "./PaymentForm.jsx"

const AddressForm = ({ handleNext, userInfo }) => {

  const [addressFormInfo, setAddressFormInfo] = useState({
    address_one: '',
    address_two: '',
    city: '',
    state: ''
  })
  const [AddressFormStatus, setAddressFormStatus] = useState(true);

  return (
    (AddressFormStatus ?
      <div className="address-form-div">
        <form>
          <label>Address 1</label>
          <input type="text" value={addressFormInfo.address_one} onChange={(event) => setAddressFormInfo({...addressFormInfo, address_one: event.target.value})}></input>
          <label>Address 2</label>
          <input type="text" value={addressFormInfo.adress_two} onChange={(event) => setAddressFormInfo({...addressFormInfo, address_two: event.target.value})}></input>
          <label>City</label>
          <input type="text" value={addressFormInfo.city} onChange={(event) => setAddressFormInfo({...addressFormInfo, city: event.target.value})}></input>
          <label>State</label>
          <input type="text" value={addressFormInfo.state} onChange={(event) => setAddressFormInfo({...addressFormInfo, state: event.target.value})}></input>
          <input type="submit" value="Next" onClick={(event) => {handleNext(event, AddressFormStatus, setAddressFormStatus)}}></input>
        </form>
      </div> : <PaymentForm handleNext={handleNext} userInfo={userInfo} addressInfo={addressFormInfo}/>)
  )
}

export default AddressForm;