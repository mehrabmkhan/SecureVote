const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  candidate: { type: String, required: true },
});

module.exports = mongoose.model('Vote', voteSchema);
