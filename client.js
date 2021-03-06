const net = require("net");
const setupInput = require('./input');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host: IP,
    port: PORT
  })

  conn.on('connect', () => {
    console.log('connection successful...');
    conn.write('Name: CJM');

    // setInterval(() => {
    //   conn.write('Move: down');
    // }, 50);
    // setInterval(() => {
    //   conn.write('Move: down');
    // }, 100);
    // setInterval(() => {
    //   conn.write('Move: down');
    // }, 150);
    // setInterval(() => {
    //   conn.write('Move: down');
    // }, 200);

  })

  conn.on('data', (data) => {
    console.log(`message from server: ${data}`);
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
}

const gameInstance = connect();
setupInput(gameInstance);

module.exports = connect;