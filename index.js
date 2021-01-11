const path = require('path');
const express = require('express');

const app = express();
const router = express.Router();

/* 3000番ポートで待ち受け */
const server = app.listen(3000, () => {
  console.log(`Node.js is listening to PORT: ${server.address().port}`);
});

app.use('/api', require('./api')); 

// 静的ファイルのルーティング
router.use(express.static('public'));

router.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use('/', router);
