const { response } = require('express');
const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello Express')
})


// app.com
// app.com/help


app.listen(3000, () => {
    console.log('Server is up on 3000');
})