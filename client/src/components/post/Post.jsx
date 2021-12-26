import "./post.css";
import {Link} from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.image ? (
        <img className="postImg" src={post.image} alt="" />
      ) : (
        <img
          className="postImg"
          src="https://random.imagecdn.app/500/150"
          alt=""
        />
      )}

      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((category,i) => (
            <span className="postCategory"  key={i}>{category}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          
        <span className="postTitle">{post.title}</span>
          </Link>
          <hr />
        <div className="postDate">
          {new Date(post.createdAt).toDateString()}
        </div>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
};

export default Post;
