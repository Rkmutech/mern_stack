const express = require('express')
const app = express()
const os=require('os');

console.log("platform"+os.platform());
console.log("Arth"+os.arch());
app.get("/messages", (req, res) => {
	res.send("Hello");
});

app.get("/:universalURL", (req, res) => {
	res.send("404 URL NOT FOUND");
});

app.listen(4040, () => {
	console.log("listening on http://localhost:3000");
})
