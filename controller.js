const houses = require('./db.json');
let globalID = 4;

const getAllHouses = (req, res) => {
        res.status(200).send(houses);
}

const createHouse = (req, res) => {
    const { address, price, imageURL} = req.body;
    houses.push({
        address,
        price,
        imageURL,
        id:globalID
    });
    globalID++;
    res.status(200).send(houses)
}

const updateHouse = (req, res) => {
    const { id } = req.params;
    const {type}= req.body;
    /*console.log(id, type)*/
    for(let i=0; i< houses.length; i++) {
        if(houses[i].id ===+id) {
            if(type === 'plus' && houses[i].price < 300000) {
                houses[i].price +10000;
            } else if (type === 'minus' && houses[i].price >1) {
                houses[i].price -10000
            }
            return res.status(200).send(houses);
        }
    }
    
    
    
    


    
}
const deleteHouse = (req, res) => {
    const houses = require('./db.json');
    const { id } = req.params;
    console.log(id)
    for(let i = 0; i < houses.length; i++) {
        if(houses[i].id === +id){
            houses.splice(i, 1);
            return res.status(200).send(houses);
        }
    }
    res.status(400).send(houses);
}

module.exports = {
    getAllHouses,
    createHouse,
    deleteHouse,
    updateHouse,
    
}