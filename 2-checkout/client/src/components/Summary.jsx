import {React, useState, useEffect} from "react";
import App from "./App.jsx";
const _ = require('underscore');
const axios = require('axios');

const Summary = ({ userInfo, addressInfo, paymentInfo}) => {

  const cleanDates = (date) => {
    let dateArray = date.split('/');
    let newDate = dateArray.join('');
    return newDate;
  }
  let sessionId = document.cookie.split('=')[1];
  let userData = {session_id: sessionId}
  _.extend(userData, userInfo, addressInfo, paymentInfo);

  userData.expiration_date = cleanDates(userData.expiration_date);

  const [summaryStatus, setSummaryStatus] = useState(true);

  const sendUserData = () => {
    axios.post('/responses', {userData})
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    (summaryStatus ?
      <div className="summary-div">
        <h2>Confirm Information</h2>
          <ul>
            <li>Name: {userInfo.name}</li>
            <li>Email: {userInfo.email}</li>
            <li>Address 1: {addressInfo.address_one}</li>
            {addressInfo.address_two.length > 0 ? <li>Address 2: {addressInfo.address_two}</li> : null}
            <li>City: {addressInfo.city}</li>
            <li>State: {addressInfo.state}</li>
            <li>Credit Card Number: {paymentInfo.credit_card}</li>
            <li>CVV: {paymentInfo.cvv}</li>
            <li>Billing Zip Code: {paymentInfo.billing_zip}</li>
          </ul>
          <button onClick={() => {setSummaryStatus(false), sendUserData()}}>Confirm Purchase</button>
      </div> : <div>Thank you for your purchase!</div>)
  )
}

export default Summary;