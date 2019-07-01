import express from 'express';
import User from '../models/User';

const router = express.Router();

// CREATE USER
router.post('/create-user', (req, res) => {
  const userInstance = new User(req.body.user);

  userInstance.save((err, user) => {
    if (err) {
      if (err.name === 'ValidationError') {
        res.status(400).send(err.message);
      } else if (err.code === 11000) {
        res.status(400).send('User already exists');
      }
    } else {
      res.status(201).json(user);
    }
  });
});

module.exports = router;
