const User = require('../models/users.model');

module.exports.list=(req,res)=>{
   User.find().then((users)=>{
    res.json(users);
   }).catch(console.error);
};

module.exports.create=(req,res)=>{       
   User.create(req.body)
   .then((user)=>{
         res.json(user);
    })
    .catch((error)=>{
    res.status(400).json(error)
    });
}

module.exports.detail=(req,res)=>{
    User.findById(req.params.id)
    .then((user)=>{
        if(user){
            res.json(user);
        }else{
            res.status(404).json({message:"User not found"});
        }
    })
    .catch(console.error);    
}

module.exports.update=(req,res)=>{
   User.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true})
    .then((user)=>{
         if(user){
              res.json(user);
         }else{
              res.status(404).json({message:"User not found"});
         }
    })
}

module.exports.delete=(req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then((user)=>{
        if(user){
            res.status(204).send();
        }else{
            res.status(404).json({message:"User not found"});
        }
    })
    .catch(console.error);    
}
