import express from 'express';
import { calculateStreak } from '../../services/calculateStreak';

const router = express.Router();

router.post('/', (req, res) => {
  try {
    const { data } = req.body;
    const streak = calculateStreak(data);
    res.status(200).json(streak);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error in server request' });
  }
});

export default router;
