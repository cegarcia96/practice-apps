const models = require("./models.js");

module.exports = {
  get: (req, res) => {
    models.getUser(req.session_id)
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((error) => {
      res.status(400).send('Error looking for session')
    })
  },

  post: (req, res) => {
    models.createUser(req.body.userData)
    .then(() => {
      res.status(201).send('posted');
    })
    .catch(() => {
      res.status(400).send('error posting')
    })
  }
}