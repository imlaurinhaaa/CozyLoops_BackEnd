require("dotenv").config(); 
const express = require("express");  
const cors = require("cors");
const productRoute = require("./src/routes/productRoute");

const app = express();  
app.use(cors());  
app.use(express.json()); 
app.use("/api", productRoute);

const PORT = process.env.PORT || 4000;  

app.listen(PORT, () => {  
    console.log(`Servidor rodando 🧶 http://localhost:${PORT}`);  
});