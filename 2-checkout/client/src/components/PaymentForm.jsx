import {React, useState, useEffect} from "react";
import Summary from "./Summary.jsx";

const PaymentForm = ({ handleNext, userInfo, addressInfo }) => {

  const [PaymentFormStatus, setPaymentFormStatus] = useState(true);

  const [PaymentFormInfo, setPaymentFormInfo] = useState({
    credit_card: '',
    expiration_date: '',
    cvv: '',
    billing_zip: ''
  });

  return (
    (PaymentFormStatus ?
      <div className="payment-form-div">
        <form>
          <label>Credit Card Number</label>
          <input type="text" value={PaymentFormInfo.credit_card} onChange={(event) => setPaymentFormInfo({...PaymentFormInfo, credit_card: event.target.value})}></input>
          <label>Expiration Date</label>
          <input type="text" placeholder="mm/yy" value={PaymentFormInfo.expiration_date} onChange={(event) => setPaymentFormInfo({...PaymentFormInfo, expiration_date: event.target.value})}></input>
          <label>CVV</label>
          <input type="text" maxLength="3" value={PaymentFormInfo.cvv} onChange={(event) => setPaymentFormInfo({...PaymentFormInfo, cvv: event.target.value})}></input>
          <label>Billing Zip Code</label>
          <input type="text" value={PaymentFormInfo.billing_zip} onChange={(event) => setPaymentFormInfo({...PaymentFormInfo, billing_zip: event.target.value})}></input>
          <input type="submit" value="Next" onClick={(event) => {handleNext(event, PaymentFormStatus, setPaymentFormStatus)}}></input>
        </form>
      </div> : <Summary userInfo={userInfo} addressInfo={addressInfo} paymentInfo={PaymentFormInfo} />)
  )
}

export default PaymentForm;