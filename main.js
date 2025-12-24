const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const BOT_ID = "BOT_ID";

let users = [];


async function sendMessage(text) {
  await fetch("https://api.groupme.com/v3/bots/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      bot_id: BOT_ID,
      text: text
    })
  });
}

app.post("/", async (req, res) => {

  const wins = 0;
  const username = req.body.name;
  const userID = req.body.user_id;

    const message = req.body.text;
      if (req.body.sender_type === "bot") {
      return res.sendStatus(200);
    }

  
    send = message.toLowerCase();
  num = Math.floor(Math.random() * 2);
    if(send.indexOf("!") <= 2){
        if(send.includes("gamble")){
              let found = false;
                  for (let i = 0; i < users.length; i++) {
                        if (users[i][0] === userID) {
                            found = true;
                    
                            if ((send.includes("heads") && num === 1) ||(send.includes("tails") && num === 0))
                            { 
                              users[i][2]++;
                              await sendMessage("You won!");
                            } else {
                              await sendMessage("You lost!");
                            }
                              break;
                          }
                        }
                if (!found) {
                  if ((send.includes("heads") && num === 1) ||(send.includes("tails") && num === 0)) {
                    users.push([userID, username, 1]);
                    await sendMessage("You won!");
                  } else {
                    users.push([userID, username, 0]);
                    await sendMessage("You lost!");
                  }
                }
            }else if(send.includes("stats")){
                    let found = false;
                    for (let i = 0; i < users.length; i++) {
                      if (users[i][0] === userID) {
                        found = true;
                        await sendMessage("Number of wins: " + users[i][2]);
                        break;
                      }
                    } 
                    if (!found) {
                      await sendMessage("Play a game first.");
                    }
              }else if(send.includes("leaderboard")){
                    /*newarr = [users[0]];
                    for (let i = 0; i < users.length; i++){
                        if(users[i][0]==newarr[0][0]){
                            ignoreThis = 1+1;
                        }else if(users[i][2]>newarr[0][2]){
                          newarr.unshift(users[i]);
                        }else{
                          newarr.push(users[i]);
                        }
                    }*/
             await sendMessage("Srry, nothing here");
              
            }
            else{
              sendMessage(" This is gambling bot /nType !gamble then heads or tails to win. /nType !stats to see how many times you have won");
            }
        }
    
    
    res.sendStatus(200);
  
});




// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Bot running on port " + PORT));
