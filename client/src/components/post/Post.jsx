import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://random.imagecdn.app/500/150"
        alt=""
      />

      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Politics</span>
          <span className="postCategory">Sports</span>
        </div>
        <span className="postTitle">Lorem balsal shaua bal dollar</span> <hr />
        <div className="postDate">3 hours ago</div>
      </div>
      <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestias omnis? Assumenda quod magni architecto quis quidem necessitatibus veritatis reprehenderit, cum ullam animi eos asperiores modi ducimus, similique natus dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nostrum nisi quia ipsa consequatur, nihil reprehenderit provident necessitatibus ea veritatis illum optio sit impedit facilis incidunt delectus minus. Corrupti, incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, reiciendis ea, laboriosam molestias consequatur doloremque neque vero accusantium, placeat rerum minima repellendus id ex ipsam! Ipsa, mollitia. Deleniti, fugiat ex? Ad at beatae id blanditiis odio, qui quas fugiat illo eius nihil praesentium mollitia corporis? Nisi distinctio molestias amet nulla sed dolor.</p>
    </div>
  );
};

export default Post;
