const express = require('express');
const path = require('path');
const app = express();

/*
	@@@
	@ so first of all, we sent html to brw then brw reading the content of the file and at some point of time it encounter with css & img file cool it made another req for those content but as you are not completing his req he will show err
	! now here the express comes to play, we dont have set statues & content type att all
	!! remerber for every static file in any complex prj brws create a get req for everything at first, 
	* static file -> are those file which server doent have to change like imgs, styles, html, js 
    * dynamic rendering -> depending on who is visiting the site or what is user trying to do, acutuall modyfynig file to do such tasks.
	* do you know brws ask index.html as root file for everthing because it is the entry point and it contains all other stuffs so we dont need to worry about it at any cost
*/

// @ we send file using two mehtods.

// #1st - setup static and middleware
app.use(express.static('./public'));

// #2nd - templating engine - SSR
app.use(express.static('./public'));

// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
	res.status(404).send('resource not found');
});

app.listen(5000, () => {
	console.log('server is listening on port 5000....');
});

// !---------------------------------
// ? -- API VS SSR --
// #API - JSON
/*
! in express or http -> api means setting up an http interface to interact with our data now data is send using JSON (javascript object notation).
! we use _res.JSON() to do all heavy lifting like adjusting content - type and stringify the data
*/
// #SSR - TEMPLATES
/*
! in express or http -> ssr mean we will set up templates and send back entire html,css,js ourselves. 
! we use _res.RENDER() to do all heavy lifting here.
*/
