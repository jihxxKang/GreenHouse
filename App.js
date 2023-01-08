/*I just brougt this from project 2 templete. Feel free to edit!*/

/*
Final Project 
Template code for CS160 Summer 2022
Prepared by Shm Garanganao Almeda
Code referenced from:
CS160 Summer 2021
https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module"
https://expressjs.com/en/starter/hello-world.html
https://codeforgeek.com/render-html-file-expressjs/
https://stackoverflow.com/questions/32257736/app-use-express-serve-multiple-html
Photo Credits:
Bunny by Satyabratasm on Unsplash <https://unsplash.com/photos/u_kMWN-BWyU>
*/

//Node modules to *require*
//if these cause errors, be sure you've installed them, ex: 'npm install express'
const express = require('express');
const app = express();
const path = require('path');

//specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const port = 8000;

var publicPath = path.join(__dirname, 'public'); //get the path to use our "public" folder where we stored our html, css, images, etc
app.use(express.static(publicPath)); //tell express to use that folder

//here's where we specify what to send to users that connect to our web server...
//if there's no url extension, it will show "index.html"
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/'));
});

app.get('/profile', function (req, res) {
  res.sendFile(publicPath + '/user_profile.html');
});

app.get('/chat', function (req, res) {
  res.sendFile(publicPath + '/message_center_1.html');
});
app.get('/chat/monica', function (req, res) {
  res.sendFile(publicPath + '/message_center_2.html');
});

app.get('/liked', function (req, res) {
  res.sendFile(publicPath + '/liked.html');
});

app.get('/browse', function (req, res) {
  res.sendFile(publicPath + '/browse.html');
});

app.get('/browse/monica', function (req, res) {
  res.sendFile(publicPath + '/monica.html');
});

app.get('/sell', function (req, res) {
  res.sendFile(publicPath + '/sell.html');
});

//run this server by entering "node App.js" using your command line.
app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
