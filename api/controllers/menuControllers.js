// menuController.js
const menuItems = [
    {id:1, name: 'Caesar Salad',price: 9.99},
    {id:2, name: 'Magherita Pizza', price:12.99},
    {id:3, name: 'Chocolate Brownie', price: 6.99}
];

export const getMenu = (req, res) => {
    res.status(200).json(menuItems);
};
