const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json ());
app.use(cors({origin: '*'}));

//Sample api endpoint

app.get("/api/message", (req, res) => {
    res.json({message: "Hello from the backend!"});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
