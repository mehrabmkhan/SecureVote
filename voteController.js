const Vote = require('../models/Vote');
const User = require('../models/User');

exports.castVote = async (req, res) => {
  try {
    const { userId, candidate } = req.body;
    const user = await User.findById(userId);
    if (!user || user.voted) {
      return res.status(400).json({ message: 'User not eligible to vote' });
    }
    const newVote = new Vote({ user: userId, candidate });
    await newVote.save();
    user.voted = true;
    await user.save();
    res.status(201).json({ message: 'Vote casted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await Vote.aggregate([
      { $group: { _id: '$candidate', count: { $sum: 1 } } },
    ]);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
