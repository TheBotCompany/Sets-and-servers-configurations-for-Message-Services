//Express endpoint to SMS communication.
'use strict';
const 
twilio = require('twilio'),
express = require('express');

//SETTINGS

const 
app = express(),
port = process.env.PORT || 5000;

const 
accountSid = '<SID_NUMBER>',
authToken = '<AUTH_TOKEN>'

//Message Generator

const client = new twilio(accountSid, authToken);

client.messages.create({
    body:'Text Message',
    to: 'Receiver Phone',
    from: 'Sender Phone'
})
.then((msg) => {console.log(msg.id)});

//REQUEST-Route

app.get('/receive',(req,res) => {
    res.send('Hi!, This is a TheBotCompany Bot made in Twilio');
});

app.listen(port, ()=>{console.log('Twilio Bot is working!')});