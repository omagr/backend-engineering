require("dotenv").config();
const { default: mongoose } = require('mongoose');
const express = require('express');
const cors = require('cors');
const productRoute = require('./routes/products');
const errorMiddleware = require('./middlewares/error');
const app = express();

/*
 * middleware
 */
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
// - cors
//? it something thats specify the frontend route to get request ? right a frontend with diff add cannt access this server at all 
app.use(cors({
    origin: ['http://localhost:3000','http://localhost:3001'], //# <- or whtevr, rember you dont need to specify last backslash
    optionSuccessStatus: 200
}))
//- custom ones 
app.use('/api/product', productRoute)

/*
 * Home
 */
app.get('/', (req, res) => {
    res.send("hellod")
})

//! this is how we use custom Middleware, also the postion is so imp 
app.use(errorMiddleware)
/*
 * connecting sever to cloud ig mongoDB
 */
mongoose
    .connect(process.env.mongoURL)
    .then(() => app.listen(3000, () => {console.log('running at 3000')}))
    .catch(() => console.log('err'))