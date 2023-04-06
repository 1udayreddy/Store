// sk_test_51MtsMbSE5cCrpebkiO4YspynnfGFw98IxQMmjcqUyLVsqLrd3YczxKxQQtTXRGfQ2b5AFryYKmXqX1mVNzP0A0oI00TmAm2kCZ


const express = require('express')
var cors = require('cors')
const stripe = require("stripe")('sk_test_51MtsMbSE5cCrpebkiO4YspynnfGFw98IxQMmjcqUyLVsqLrd3YczxKxQQtTXRGfQ2b5AFryYKmXqX1mVNzP0A0oI00TmAm2kCZ')

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json())

app.post('/checkout', async (req , res)=>{

   console.log(req.body)
const items = req.body.items;
    let lineItems= [];
    items.forEach((item) => {
        lineItems.push(
        {
            price:item.id ,
            quantity:item.quantity
        }
        )
    });

    const session = await  stripe.checkout.sessions.create({
        line_items:lineItems,
        mode:'payment',
        success_url: "http://localhost:3000/Success",
        cancel_url:"http://localhost:3000/Cancel"
    });
    res.send(JSON.stringify({
        url:session.url
    }))
});

app.listen(4000, ()=>console.log("listening to port 4000"))
