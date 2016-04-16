import Lychee from './src/lychee';

const ptt = new Lychee({
  username: 'username',
  password: 'password',
});

ptt.connect();
setTimeout(ptt.disconnect.bind(ptt), 3000);
