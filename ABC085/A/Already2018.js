const input = require("fs").readFileSync("/dev/stdin", "utf8").split(/\n/);
console.log(input[0].replace("2017", "2018"));
