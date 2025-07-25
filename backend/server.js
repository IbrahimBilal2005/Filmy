const express = require('express'); 
const app = express(); 
const PORT = 3000;  

require('dotenv').config();  

// Use your centralized Prisma client 
const prisma = require('./src/utils/prismaClient'); 

app.use(express.json());  

// Route Imports 
const favoriteRoutes = require('./src/routes/favoriteRoutes'); 
const movieRoutes = require('./src/routes/movieRoutes');
const recentSearchRoutes = require('./src/routes/recentSearchRoutes');

// Route Mounting  
app.use('/', favoriteRoutes); 
app.use('/', movieRoutes);
app.use('/', recentSearchRoutes);

// Server Start 
app.listen(PORT, () => {   
  console.log(`🚀 Server is running on http://localhost:${PORT}`); 
});