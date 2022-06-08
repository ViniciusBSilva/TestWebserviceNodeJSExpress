const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from App Engine!');
});

// Listen to the App Engine-specified port, or 9999 otherwise
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});