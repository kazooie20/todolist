//Express & body parser 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Functionality MODULES
const date = require(__dirname + '/date.js');


//GLobal VARS
const todoList = [];
const workList = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//HOME ROUTE

app.get('/', (req,res) => {
    const mydate = date.get_date();
    //Render ejs list page
    res.render('list', {currentDay: mydate, itemList: todoList});
})

app.post('/', (req,res) => {

    const input = req.body.inputtxt;

    if (req.body.addbtn === 'Work') {
        console.log('Added ' + input + ' into Work List');
        workList.push(input);
        res.redirect('/work');
    }
    else {
        console.log('Added ' + input + ' into To Do List');
        todoList.push(input);
        res.redirect('/');
    }
})

//WORK PAGE

app.get('/work', (req,res) => {
    res.render('list', {currentDay: 'Work', itemList : workList});
})

//ABOUT PAGE
app.get('/about', (req,res) => {
    res.render('about');
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

