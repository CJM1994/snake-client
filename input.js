const connect = require("./client");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setEncoding('utf8');
  stdin.setRawMode(true);
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function (data) {

  if (data.charCodeAt() === 3) process.exit();

  switch (data) {

    case 'w':
      connection.write('Move: up');
      break;

    case 'a':
      connection.write('Move: left');
      break;

    case 's':
      connection.write('Move: down');
      break;

    case 'd':
      connection.write('Move: right');
      break;

    default:
      break;
  }
}

module.exports = setupInput, handleUserInput;