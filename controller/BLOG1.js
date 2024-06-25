const Blog = require('../model/BLOG');

// Create a new blog post
let CreateBlog = async function (req, res, next) {
    try {
        const { title, content, userId } = req.body;
        const CreateBlog = await Blog.create({ title, content, userId });

        res.status(201).json({
            status: "success",
            message: 'Blog Create successfully',
            Data: CreateBlog
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Get all blogs
let GetAllBlogs = async function (req, res, next) {
    try {
        const getallblogs = await Blog.find().populate('userId')
        res.status(201).json({
            status: "success",
            message: 'Blog Read Successfully',
            Data: getallblogs
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Get Single blog
let GetSingleBlog = async function (req, res, next) {
    try {
        id = req.params.id
        const getsingleblog = await Blog.findById(id).populate('userId')
        res.status(201).json({
            status: "success",
            message: 'Blog Read Successfully',
            Data: getsingleblog
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Update Blog
let UpdateBlog = async function (req, res, next) {
    try {
        id = req.params.id
        const UpdateBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true }).populate('userId')
        res.status(201).json({
            status: "success",
            message: 'Blog Update Successfully',
            Data: UpdateBlog
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// Delete a blog post
let DeleteBlog = async function (req, res, next) {
    try {
        id = req.params.id
        const DeleteBlog = await Blog.findByIdAndDelete(id)
        res.status(201).json({
            status: "success",
            message: 'Blog Delete Successfully',
            Data: DeleteBlog
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


module.exports = { CreateBlog, GetAllBlogs, GetSingleBlog, UpdateBlog, DeleteBlog }
// exports.createBlog = async (req, res) => {
//   const { title, content } = req.body;
//   try {
//     const newBlog = new Blog({
//       title,
//       content,
//       author: req.user.userId // Assuming userId is set in middleware after authentication
//     });
//     await newBlog.save();
//     res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Get all blogs
// exports.getAllBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find().populate('author', 'username'); // Populate author field with username
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete a blog post
// exports.deleteBlog = async (req, res) => {
//   const { id } = req.params;
//   try {
//     await Blog.findByIdAndDelete(id);
//     res.json({ message: 'Blog deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
