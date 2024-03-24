import express from 'express';
import routes from './routes';

const app = express();

// app.use("/products", (req, res)=> {
//     //step-1 DB sa data laega
//     res.send({
//         message: "Products fetched successfully",
//         data: [{
//             title: "Welcome",

//         }]
//     });
// }); 
//Basic steps

app.use('/', routes)

app.listen(3001, ()=> {
    console.log('Server is listening on port 3001')
});
