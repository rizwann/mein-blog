const router = require("express").Router();
// const User = require("../models/User");

const Post = require("../models/Post");

//Create Post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get a Post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET All Posts

router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username: username });
      
    } else if (catName) {
      posts = await Post.find({ categories: catName });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});



//UPDATE Post Username
// router.put("/", async (req, res) => {
//   const username = req.query.postUser;

//   if(username){
//     try {
   
//       const res = await Post.updateMany({ username: username }, {$set:{username: req.body.username }});
//       res.status(200).json(res);
      
     
//    }
//    catch (error) {
//     res.status(500).json(error);
//   }
//   }
  

// })


//UPDATE Post


router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          req.body,

          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err, "Error updating post");
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err, "Post not found");
  }
});

//Delete Post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been Deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can Delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
