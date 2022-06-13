const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;

const user = require('./mock.json');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/user/login', async(req, res) => {
    const result = user.find(e => e.email == req.body.email && e.password == req.body.password)
    if (result) return res.status(200).json({
        message: "Successfully",
        status: 200,
        payload: result
    })
    return res.status(401).json({
        message: "Incorrect email or password",
        status: 401,
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));