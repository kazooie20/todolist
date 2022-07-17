const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.get('/', (req,res) => {
    const currentDay = get_date();
    if (currentDay === 6 || currentDay === 0) {
        res.send('Weekend, boo!');
    }
    else {
        res.sendFile(__dirname + '/index.html');
    }
    
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

const get_date = () => {
    const today = new Date ();
    const day = today.getDay();
    return day;
}
