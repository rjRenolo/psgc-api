const express =require('express')

const db = require('./models')

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());


////////////
// ROUTES //
////////////
app.use("/api/v1/hatdog", require("./routes/hangin.js"));
////////////
// ROUTES //
////////////


app.listen(port, () => {
    console.log(`Server is up and running in port : ${port}`);
});