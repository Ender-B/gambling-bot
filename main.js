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
let users = [];
  
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
                  } else if(user.length-1 == i){
                      users.push([userID,username,1]);
                  }
              }
          } else{
            sendmessage("you lost");
          }
      }else if(message.includes("stats"){
            for (let i = 0; i < users.length; i++) {
                  if(users[i][0]==userID;){
                      sendmessage("Number of wins: " +users[i][2]);
                  } else if(user.length-1 == i){
                      sendmessage("play a game first");
                  }
            }
      }else if(message.includes("leaderboard"){
          newarr = [user[0]];
          for (let i = 0; i < users.length; i++){
              if(users[i][0]==newarr[0][0];){
                  ignoreThis = 1+1;
              }else if(users[i][2]>newarr[0][2]){
                newarr.unshift(users[i]);
              }else{
                newarr.push(users[i]);
              }
          }
        
      }
      else{
        sendmessage(" This is gambling bot /nType !gamble then heads or tails to win. /nType !stats to see how many times you have won /nType !leaderboard to see the leaderboard");
      }
  }
  
  
});




// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Bot running on port " + PORT));
