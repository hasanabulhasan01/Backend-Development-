import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    //step 1 : get all products from database
    res.send ({message: " Success" }) 
})

export default router;