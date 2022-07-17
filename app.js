const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('view engine', 'ejs');

app.get('/', (req,res) => {
    const currentDay = get_date();
    let day = '';
    if (currentDay === 6 || currentDay === 0) {
        day = 'weekend';
    }

    else {
        day = 'weekday';
    }

    res.render('list', {day: currentDay });
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


//FUNCTIONS//

const get_date = () => {
    const today = new Date ();
    const day = today.getDay();
    return day;
}
