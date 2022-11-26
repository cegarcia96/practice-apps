import {React, useState, useEffect} from "react";
import UserForm from "./UserForm.jsx"
const axios = require("axios");

const App = () => {

  const [sessionFound, setSessionFound] = useState(false);
  const [checkoutStatus, setCheckoutStatus] = useState(false);

  const toggleCheckoutStatus = () => {
    checkoutStatus ? setCheckoutStatus(false) : setCheckoutStatus(true);
  }
  useEffect(() => {
    axios.get('/responses')
    .then((response) => {
      if (response.data[0].length > 0) {
        setSessionFound(true);
      }
    })
    .catch((error) => {
      console.log(error);
    })
  })
  return (
    sessionFound ? <div>Thank you for your purchase!</div> :
      checkoutStatus ? <UserForm /> : <div>Hello User<button className="Checkout" onClick={toggleCheckoutStatus}>Checkout</button></div>
  )
}

export default App;