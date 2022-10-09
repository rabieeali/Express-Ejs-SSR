const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(8000 , ()=>console.log("Server is running!"));

// register view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
// app.set('views', 'myviews');

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Blog #1', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Blog #2', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Blog #3', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
