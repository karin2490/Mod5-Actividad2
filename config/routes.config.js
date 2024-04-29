const express = require('express');
const router=express.Router();
const users=require('../controllers/users.controller');
const posts=require('../controllers/posts.controller');

//CRUD de usuarios
router.post("/users",users.create);
// router.get("/users",users.list);
// router.get("/users/:id",users.detail);
// router.patch("/users/:id",users.update);
// router.delete("/users/:id",users.delete);

//CRUD de posts
router.post("/api/posts",posts.create);
router.get("/api/posts",posts.list);
router.get("/api/posts/:id",posts.detail);
router.patch("/api/posts/:id",posts.update);
router.delete("/api/posts/:id",posts.delete);

module.exports=router;