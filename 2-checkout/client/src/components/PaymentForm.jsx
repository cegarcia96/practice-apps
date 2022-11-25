import {React, useState, useEffect} from "react";

const PaymentForm = ({ handleNext }) => {

  const [PaymentFormStatus, setPaymentFormStatus] = useState(true);

  return (
    PaymentFormStatus ?
      <div className="payment-form-div">
        <form>
          <label>Credit Card Number</label>
          <input type="text"></input>
          <label>Expiration Date</label>
          <input type="date"></input>
          <label>CVV</label>
          <input type="text" maxLength="3"></input>
          <label>Billing Zip Code</label>
          <input type="text"></input>
          <input type="submit" value="Next" onClick={(event) => {handleNext(event, PaymentFormStatus, setPaymentFormStatus)}}></input>
        </form>
      </div> : <div>Onwards</div>
  )
}

export default PaymentForm;