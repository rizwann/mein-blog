const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer =require("multer");
const PORT = 5000;
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name + "-" + Date.now() + ".jpeg");
    }
})
 
const upload = multer({ storage: storage });
app.post('/api/upload', upload.single("file"), (req, res) => {
    res.status(500).json("File Has been Uploaded")
})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", catRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
