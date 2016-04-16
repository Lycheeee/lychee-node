import iconv from 'iconv-lite';
import net from 'net';
import Rx from 'rx';

const PTT_HOST = 'ptt.cc';
const PTT_PROT = 23;
const PTT_BUFFER_DURATION = 2000;

class Connection {
  constructor() {
    this._client = net.createConnection(PTT_PROT, PTT_HOST);

    // add client listeners
    this._client.addListener('end', () => {
      console.log('end connection');
    });

    // set up _source
    this._source = Rx.Observable.create(observer => {
      this._client.addListener('data', data => {
        observer.onNext(iconv.decode(data, 'big5'));
      });
    })
    .buffer(() => Rx.Observable.timer(PTT_BUFFER_DURATION))
    .map(msgs => msgs.reduce((acc, msg) => acc + msg, ''))
    .filter(msg => msg.length > 0);

    this._source.subscribe((wave) => {
      console.log(wave);
    });
  }

  end() {
    if (this._client) { this._client.end(); }
  }
}

export default Connection;
