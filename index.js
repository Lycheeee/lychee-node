import Lychee from 'lychee-node';

const ptt = new Lychee({
  username: 'foo',
  passward: 'bar'
});

ptt.connect();

// after successful connected

// - go functions
ptt.go.home();
ptt.go.favorite();

ptt.go.board('Gossiping')
ptt.go.article('Gossiping', 224087);
ptt.go.article('Gossiping', '#1MN_7H_9');

// - status functions
ptt.is.connected();
ptt.is.at.home();
ptt.is.at.board();
ptt.is.at.board('Gossiping');
ptt.is.at.article();
ptt.is.at.article('Gossiping', '#1MN_7H_9');

// - parse functions
const board = ptt.parse.board();
const board = ptt.parse.board('Gossiping');
const article = ptt.parse.article();
const article = ptt.parse.article('Gossiping', '#1MN_7H_9');

// - properties
const board = {
  title,
  concurrentUser,
  articles: []
}

const article = {
  read,
  upvote,
  newComment,
  title,
  author,
  publishAt,
}

// close connection

ptt.disconnect();
