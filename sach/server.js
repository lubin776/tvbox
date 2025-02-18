const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
app.use(cors());
app.use(express.static('public'));

// 视频路由
app.use('/video', require('./routes/video'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});