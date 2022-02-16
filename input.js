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

module.exports = setupInput, handleUserInput;