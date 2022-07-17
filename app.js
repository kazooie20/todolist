//Express & body parser 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//GLobal VARS
let todoList = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    const mydate = get_date();
    //Render ejs list page
    res.render('list', {currentDay: mydate, itemList: todoList});
})

app.post('/', (req,res) => {
    const input = req.body.inputtxt;
    todoList.push(input);
    console.log('Added ' + input);
    res.redirect('/'); 
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

//Functionality 
const get_date = () => {
    const today = new Date ();
    const options = {
        day: 'numeric',
        weekday: 'long',
        month: 'long'
    }
    const day = today.toLocaleString('en-US', options);
    return day;
}