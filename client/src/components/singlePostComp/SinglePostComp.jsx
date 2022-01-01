import "./singlePostComp.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const SinglePostComp = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [image, setImage] = useState(null);
  const { user} = useContext(Context);
  const PF = "http://localhost:5000/images/";
  

  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get(`/posts/${postId}`);
      setPost(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setImage(response.data.image);
    }
    fetchPost();
  }, [postId]);

  const handleDelete = async (usrnm) => {
    try {
      await axios.delete(`/posts/${post._id}`, { data: { username: usrnm } });
      window.alert("Post Deleted");
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    const updatedPost = {
      username: user.username,
      title,
      description,
    };
    if (image) {
      const data = new FormData();
      const imgName = Date.now() + "-" + image.name;
      data.append("name", imgName);
      data.append("image", image);
      updatedPost.image = imgName;
      // console.log(data)
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.put(`/posts/${post._id}`, {
        ...updatedPost,
      });
      window.alert("Post Updated");
      setUpdateMode(false);
      setImage(updatedPost.image);
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <div className="singlePostComp">
      <div className="singlePostCompWrapper">
        {updateMode ? (
          <>
            <label htmlFor="fileInput">
              <i className="fas fa-image singlePostCompIcon"></i>
            </label>

            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image !== post.image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="img"
                className="singlePostCompImg"
              />
            ) : (
              <img src={image? PF+image : "https://random.imagecdn.app/500/150"} alt="img" className="singlePostCompImg" />
            )}
          </>
        ) : (
          <img className="singlePostCompImg" src={image? PF+image : "https://random.imagecdn.app/500/150"} alt="" />
        )}

        {updateMode ? (
          <input
            className="singlePostCompTitleInput"
            autoFocus
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostCompTitle">
            {title} <br />
            {post.categories?.map((c, i) => (
              <Link to={`/?cat=${c}`} key={i} className="link">
                <span className="singlePostCompCategory">{c} </span>
              </Link>
            ))}
            {post.username === user?.username && (
              <div className="singlePostCompEditContainer">
                <i
                  className="fas fa-pencil-alt singlePostCompIcon"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="fas fa-trash-alt singlePostCompIcon"
                  onClick={() => handleDelete(user.username)}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostCompInfo">
          <span className="singlePostCompAuthor">
            Author:{" "}
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>

          <span className="singlePostCompDate">
            {new Date(post.updatedAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostCompDescInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="singlePostCompDesc">{description}</p>
        )}
        {updateMode && (
          <button className="singlePostCompUpdateBtn" onClick={handleUpdate}>
            Update Post
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePostComp;
