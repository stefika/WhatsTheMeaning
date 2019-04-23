var emoji = require("node-emoji");

if (emoji.hasEmoji('🍕') == true){
    var emoji = prompt("Enter your emoji please."); //Need to implement readline function
    console.log(emoji.find(emoji));
}
else{
    console.log("This emoji in no availibe yet, sorry 😢");
}