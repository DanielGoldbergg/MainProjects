const mongoose =require('mongoose')


mongoose.connect('mongodb://localhost:27017/studentDB', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}); 