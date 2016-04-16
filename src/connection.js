import net from 'net';
import iconv from 'iconv-lite';

class Connection {
  constructor() {
    const connection = net.createConnection(23, 'ptt.cc');
    connection.setTimeout(2000);

    connection.addListener('data', data => {
      this.buffer += iconv.decode(data, 'big5');
    });
  }
}

export default Connection;
