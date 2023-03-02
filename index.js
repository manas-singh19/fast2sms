const express = require("express");
const app = express();
const fast2sms = require("fast-two-sms");

app.get("/",  async (req, res) =>{
  var options = {
    authorization:
      " ",
    message: "YOUR_MESSAGE_HERE",
    numbers: ["7888388017"],
  };
  let response = await fast2sms.sendMessage(options); //Asynchronous Function.
  res.send(response);
});

app.listen(3000);
