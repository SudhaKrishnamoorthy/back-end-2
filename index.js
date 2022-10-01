const express = require("express");
const cors = require('cors');
const {getAllHouses, createHouse, deleteHouse, updateHouse } = require('./controller');
const app = express()

app.use(express.json());
app.use(cors());

app.get('/api/houses', getAllHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);

app.listen(4000, () => console.log("Server running on port 4000"))