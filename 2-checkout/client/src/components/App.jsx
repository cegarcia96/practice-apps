import {React, useState, useEffect} from "react";
import UserForm from "./UserForm.jsx"

const App = () => {

  const [checkoutStatus, setCheckoutStatus] = useState(false);

  const toggleCheckoutStatus = () => {
    checkoutStatus ? setCheckoutStatus(false) : setCheckoutStatus(true);
  }

  return (
    <div>
      <p>Hello, User!</p>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      {checkoutStatus ? null : <button className="Checkout" onClick={toggleCheckoutStatus}>Checkout</button>}
      {checkoutStatus ? <UserForm /> : null}
    </div>
  )
}

export default App;