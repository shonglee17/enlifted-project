import express from 'express';
import bodyParser from 'body-parser'
import testRouter from './routes/routes.js';

const app = express();

// /** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

//this is a test query 
app.use('/', testRouter);


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

export default app;