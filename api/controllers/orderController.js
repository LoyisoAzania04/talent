const prisma = require('../utils/prisma');

exports.getMenuItems = async (req,res)=>{
    try{
        res.status(200).json(menuItems);
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'Internal server error'})

    }
};