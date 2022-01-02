const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer =require("multer");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));



  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name );
      console.log(req.body.name)
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("image"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });


  app.get('/', (req,res)=>{
    res.json("API for mein-blogg.netlify.app")
  })

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", catRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on port ${process.env.PORT || 5000}`);
});
