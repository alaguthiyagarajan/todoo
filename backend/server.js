const express = require('express');
const mongoose= require('mongoose');
const cors=require('cors');
const todoRoutes=require('./routes/todo');
const app= express();
require('dotenv').config();

const frontend=process.env.FRONTEND_URL
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection failed:', err));
 
  app.get('/', (req, res) => {
    res.send('Backend is working!');
  });
  
  
app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);


app.listen(5000, ()=>console.log("app is running on port no : 5000"));

