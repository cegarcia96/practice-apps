const db = require("./db.js")

module.exports = {
  createUser: (userData) => {
    return db.queryAsync("INSERT INTO responses (session_id, name, email, password, address_one, address_two, city, state, credit_card, expiration_date, cvv, billing_zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [userData.session_id, userData.name, userData.email, userData.password, userData.address_one, userData.address_two, userData.city, userData.state, userData.credit_card, userData.expiration_date, userData.cvv, userData.billing_zip]);
  },
  getUser: (userData) => {
    return db.queryAsync("SELECT name FROM responses WHERE session_id = ?", [userData]);
  }
}