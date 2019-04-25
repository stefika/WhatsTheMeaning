var emoji = require("node-emoji");
var $ = require("jquery");

function klik(){
    
    var val = $.trim($("textarea").val());
      if (val != "") {
          var emo = emoji.find(val);
      }
  document.getElementById("demo").innerHTML = emo;
  console.log(emo);
}