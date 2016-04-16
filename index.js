import Lychee from './src/lychee';

require('dotenv').config();

const ptt = new Lychee({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

ptt.connect();
setTimeout(ptt.disconnect.bind(ptt), 3000);
