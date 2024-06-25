var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/BLOG1')

/*CREATE BLOG*/
router.post('/CreateBlog',CONTROL.CreateBlog);

/*GET ALL BLOG*/
router.get('/GetAllBlogs',CONTROL.GetAllBlogs);

/*GET SINGLE BLOG*/
router.get('/GetSingleBlog/:id',CONTROL.GetSingleBlog);

/*UPDATE ALL BLOG*/
router.patch('/UpdateBlog/:id',CONTROL.UpdateBlog);

/*DELETE ALL BLOG*/
router.delete('/DeleteBlog/:id',CONTROL.DeleteBlog);

module.exports = router;
