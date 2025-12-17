const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const BOT_ID = "BOT_ID";

let users = [];


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

const wins = 0;
const username = req.body.name;
const userID = req.body.user_id;
let users = [[userID,username,wins]];
  
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
          if((message.includes("heads")&& num == 1)||(message.includes("tails")&& num == 0)){
              sendmessage("You Won"); 
              for (let i = 0; i < users.length; i++) {
                  if(users[i][0]==userID;){
                      users[i][2] = users[i][2] + 1;
                      sendmessage("Number of wins: " +users[i][2]);
                  } else if(user.length-1 == i){
                      
                  }
              }
          } else{
            sendmessage("you lost");
          }
      }else if(message.includes("stats"){
        
      }else{
        sendmessage(" This is gambling bot /nType !gamble then heads or tails to win. /nType !stats to see how many times you have won /nType !leaderboard to see the leaderboard");
      }
  }
  
  
});




// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Bot running on port " + PORT));
