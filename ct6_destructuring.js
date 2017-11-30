let user_input = process.argv.slice(2);
let output = {};

[, output.username, output.email] = user_input;

console.log(output)
