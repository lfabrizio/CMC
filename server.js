const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());

app.use('/', express.static("public"));

app.get('/', (req, res) => res.send('Hello World!'))

var data = [];
app.post('/api', function (req, res) {
    const mentorName = req.body.mentorname;
    const language = req.body.language;
    const temp = {
        mentorname: mentorName,
        language: language
      }
      data.push(temp)
 console.log(data);

    const reply = `${mentorName} known languages ${language}`
    res.send("reply");
   })

   app.get("/showprofile/:mentorname", function (req, res) {
    const user = req.params.mentorname;
    console.log(user);
   
    res.send("show profile working");
   })
   app.get("/getallusers", function (req, res) {
    res.send(data)
   })
   
   

app.listen(port, () => console.log(`Example app listening on port ${port}!`))