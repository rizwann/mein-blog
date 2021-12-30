import "./post.css";
import {Link} from 'react-router-dom'

const Post = ({ post }) => {
  const PF = 'http://localhost:5000/images/'
  console.log(PF+post.image, "HI")
  return (
    <div className="post">
      {post.image ? (
        <img className="postImg" src={PF+post.image} alt="" />
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

<Link to={`/?cat=${category}`} key={i} className='link'>


<span className="postCategory" >{category}</span>
  </Link>


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
