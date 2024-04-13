const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const menuItems = [
    {id:1, name: 'Caesar Salad',price: 9.99},
    {id:2, name: 'Magherita Pizza', price:12.99},
    {id:3, name: 'Chocolate Brownie', price: 6.99}
];
let orders = [];
app.get('/menu',(req, res) =>{
    res.status(200).json(menuItems);
});

app.post('/orders', (req,res) =>{
    const {items, userDetails, deliveryAddress, deliveryNotes} = req.body;

    if (!items || !userDetails || !deliveryAddress) {
         return res.status(400).json({error:'Items and user details are required fields'});
    }

     const orderId =orders.length + 1;

    orders.push({
        id: orderId,
        items,
        userDetails,
        deliveryAddress,
        deliveryNotes,
        status: 'Placed'
    });

    res.status(200).json({message: 'Order placed successfully'})
});

app.put('/orders/:orderID/status',(req,res) => {
    const {orderId} = req.params;
    const {status} = req.body;

    const order = orders.find(order => order.id == orderId);

    if(!order) {
        return res.status(404).json({error: 'Order not found'});
    }
    order.status = status;

    res.status(200).json({message: `Order ${orderId} status update to ${status}` })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
});


