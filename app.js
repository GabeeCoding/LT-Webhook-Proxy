const express = require("express") 
const fetch = require("node-fetch")
require("dotenv").config()

const app = express();
app.use(express.json());

const url = process.env.URL
if(url === undefined){
    console.log("Missing URL environment variable");
    process.exit(1);
}

app.post("/", (req,resp) => {
    //proxy
    fetch(url, {
        method: 'POST', 
        body: JSON.stringify(req.body),
        headers: {
            "Content-Type": "application/json"
        }
    });
    resp.send("Ho");
});

let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port} (http://localhost:${port})`);
})