const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary')

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const entrySchema = new mongoose.Schema({
  word: {type: String, unique: true},
  definition: {type: String}
});

const Entry = mongoose.model('Entry', entrySchema);

const save = (entry) => {
  return Entry.create(entry);
}

const getEntries = () => {
  return Entry.find({});
}

const updateEntry = (entry) => {
  return Entry.updateOne({ _id: entry.word._id}, { definition: entry.newDefinition})
}

const deleteEntry = (entry) => {
  return Entry.deleteOne({ _id: entry._id})
}

module.exports = {
  save: save,
  getEntries: getEntries,
  updateEntry: updateEntry,
  deleteEntry: deleteEntry
}