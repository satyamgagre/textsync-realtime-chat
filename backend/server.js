const express = require("express");

app.get("/", (req, res) => {
    // root route http://localhost:5000/
    res.send("Hello World")
})
const app = express();

app.listen(5000, () => console.log('Server is running on port: 5000'));

