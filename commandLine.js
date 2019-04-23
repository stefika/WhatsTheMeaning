var emoji = require("node-emoji");
var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter your emoji please: "), function(answer){
    var emo = "💻";
    console.log(emoji.find(emo));
}
