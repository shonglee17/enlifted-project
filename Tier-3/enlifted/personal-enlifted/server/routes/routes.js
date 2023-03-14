import express from 'express';
import pool from '../modules/pool.js';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('req.user:', req.user);

  pool
    .query(`SELECT * FROM "flows";`)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for flows:', error);
      res.sendStatus(500);
    });
});

export default router;