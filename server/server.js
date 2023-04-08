const path = require('path')
const express = require('express')
var cors = require('cors');

const stripe = require("stripe")('sk_test_51MtsMbSE5cCrpebkiO4YspynnfGFw98IxQMmjcqUyLVsqLrd3YczxKxQQtTXRGfQ2b5AFryYKmXqX1mVNzP0A0oI00TmAm2kCZ')

const app = express();
app.use(cors({
  origin: 'https://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
  credentials: true
}));
app.use(express.json())

// deployment 
__dirname = path.resolve();
const staticPath = path.join(__dirname, '..', 'store', 'build');

app.use(express.static(staticPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});
  

//deploment code upto here
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

// heroku
const PORT = process.env.PORT||5000;
app.listen(PORT, ()=>console.log(`listening to port  ${PORT}`))
