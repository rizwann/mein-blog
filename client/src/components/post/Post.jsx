import "./post.css";
import {Link} from 'react-router-dom'

const Post = ({ post }) => {
  const PF = 'https://meinblog-backend.herokuapp.com/images/'

  return (
    
    <div className="post">

<Link className="link" to={`/post/${post._id}`}>
{post.image ? (
        <img className="postImg" src={PF+post.image} alt="" />
      ) : (
        <img
          className="postImg"
          src="https://random.imagecdn.app/500/150"
          alt=""
        />
      )}
    </Link>
  





      <div className="postInfo">
        
       
        <Link className="link" to={`/post/${post._id}`}>
        <span className="postTitle">{post.title}</span>
        </Link>
        <div className="postCategories">
          {post.categories.map((category,i) => (

<Link to={`/?cat=${category}`} key={i} className='link'>


<span className="postCategory" style={{marginRight:"10px"}} >{category}</span>
  </Link>


          ))}
        </div>
         
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
