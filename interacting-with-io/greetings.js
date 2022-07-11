process.stdin.on('data', (data) => {
  // the processing on each data event
  const name = data.toString().toUpperCase().trim();
  if (name !== '') {
    process.stdout.write(`hello ${name}, nice to meet you`);
  } else {
    process.stderr.write(` the input was empty dude§!`);
  }
});
