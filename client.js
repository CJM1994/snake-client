const net = require("net");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setEncoding('utf8');
  stdin.setRawMode(true);
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function (data) {
  console.log(data.charCodeAt());
  if (data.charCodeAt() === 3) process.exit();
}

// establishes a connection with the game server
const connect = function () {

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
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

setupInput();
connect();

module.exports = connect;