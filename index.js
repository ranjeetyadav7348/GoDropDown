const express = require('express');
const { router } = require('./routers/routes');
const connectdb = require('./config/db');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
connectdb();
app.use(express.json());
app.use('/api/user', router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
