//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
// LOdash
const _ = require('lodash');
// const { title } = require("process");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


// %%%%%%%%%%%%%%%%%%%%%%%%    GL VARIABLES   %%%%%%%%%%%%%%%%%%%%%%%%%%%
let PostsArray = [];


// %%%%%%%%%%%%%%%%%%%%%%%%    GET REQUESTS   %%%%%%%%%%%%%%%%%%%%%%%%%%%
// home page
app.get('/',(req,res)=>{
  
  res.render('home',{
    homeStartingContent:homeStartingContent,
    Posts:PostsArray
  })
})

app.get('/posts/:postTitle',(req,res)=>{
  const checkPostTitle = _.lowerCase(req.params.postTitle);
  // we loops our post array to check for the specific post in the url
  PostsArray.forEach(post => {
    const pt = _.lowerCase(post.title);
    const pc = _.lowerCase(post.content);
    if ( checkPostTitle === pt ) { //if the postTitle in the url matches any of our Posts' title
      res.render('post',{postTitle:pt,postContent:pc})
    }
  });
})

// about page
app.get('/about',(req,res)=>{
  res.render('about',{aboutContent:aboutContent})
})
// all posts page
app.get('/allposts',(req,res)=>{
  res.render('allposts',{Post:PostsArray})
})
// contact page
app.get('/contact',(req,res)=>{
  res.render('contact',{contactContent:contactContent})
})
// compose post page
app.get('/compose',(req,res)=>{
  res.render('compose')
})


// %%%%%%%%%%%%%%%%%%%%%%%%   POST REQUESTS   %%%%%%%%%%%%%%%%%%%%%%%%%%%

// compose post page
app.post('/compose',(req,res)=>{
  let title = req.body.composeText_title;
  let content = req.body.composeText_content;
  let post = {
    title:title,
    content:content
  }
  // Posts = [...Posts,post];
  PostsArray.push(post);
  res.redirect('/');
})













app.listen(4001, function() {
  console.log("Server started on port 4001");
});
