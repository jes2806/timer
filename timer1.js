// implement alarm clock to beep after a specified about of time on terminal

// process.stdout.write('\x07'); beep sound
// delay can be process.argv[2] just turn to number.  "Number(process.argv[2])"
const args = process.argv.slice(2);
for (const arg of args) {
  if (isNaN(arg) || arg < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, Number(arg * 1000));
}