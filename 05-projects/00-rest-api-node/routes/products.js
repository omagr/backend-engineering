const express = require('express');
const router = express.Router();
const {
    get_A_Product, set_A_Product, update_A_Product, delete_A_Product, get_Products
} = require('../controllers/products')

/*
 * getting all products from cloud 
 */
router.get('/', get_Products)

/*
 * posting product to cloud 
 */
router.post('/', set_A_Product)

/*
 * getting a product from cloud 
 */
router.get('/:id', get_A_Product)

/*
 * deleting a product from cloud 
 */
router.delete('/:id', delete_A_Product)

/*
 * updating a product into cloud 
 */
router.put('/:id', update_A_Product)

module.exports = router;


// bro just stop thnking fukcing things
//     - a normal clg life, whihc includes
//         - 4yrs outing
//         - travaling, fun, freind, 
//         - gf/bf/betsise/freind wali bakchodi
//         - useless study
//         - startup opp if you have gret alumn network and minds
        
//     - a normal worker life
//         - not happy
//         - working 8-9
//         - partying, hooksups and wohi instragam wali harkate
//         - after 5 yrs wo sb roynge kiyuki na paisa rhga na himmt kuch karne ki sirf jop karr rhe ah wohi karte rha jaynge 
        
//     - meri life ?
//         - mai bhai abhi internship -> freelancing -> agency -> remote job -> startup -> side hustle
//         - mujhe nhi mtln ki yh kya krr rhe h mujhe na chlna h duniya ke raste pa na sochna h, apna risk ko dekhh kekamm karna 
//         - abhi yha locla hi maze krne ki kosjhsi karo
//         - fir 6m-1y me bhr nikl jaoge tb wohi mze krnlena 
//         - but apne makshat ne nhi batnaka 