const spin = ['\r|', '\r/', '\r-', '\r\\',];

for (let i = 0; i < spin.length; i++) {
  setTimeout(() => {
    process.stdout.write(spin[i]);
  }, 100 * i);

  if (i === spin.length - 1) {
    setTimeout(() => {
      process.stdout.write('\n');
    }, 100 * i);
  }
}
