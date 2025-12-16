const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const BOT_ID = "BOT_ID";




async function sendMessage(text) {
  await fetch("https://api.groupme.com/v3/bots/post"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      bot_id: BOT_ID,
      text: text
    })
  };
}

app.post("/", async (req, res) => {

  function getMessage(){

  const message = req.body.text;
    if (req.body.sender_type === "bot") {
    return res.sendStatus(200);
  }
  return message
}

  message = getMessage.toLowerCase();
num = Math.floor(Math.random() * 2);
  if(message.indexOf("!") == 0){
      if(message.includes("gamble")){
          if(message.includes("heads")&& num == 1){
              sendmessage("You Won");
          } else if(message.includes("tails")&& num == 0){
            sendmessage("You Won");
          } else{
            sendmessage("you lost");
          }
      } else{
        sendmessage(" This is gambling bot, ");
      }
  }
  
  
});




// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Bot running on port " + PORT));
