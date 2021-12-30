import './singlePostComp.css'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

const SinglePostComp = () => {
    const location = useLocation();
    const postId  = location.pathname.split('/')[2]
    const [post, setPost] = useState({})
    const PF = 'http://localhost:5000/images/'
  console.log(PF+post.image, "HI")

    useEffect(()=>{
        async function fetchPost(){
            const response = await axios.get(`/posts/${postId}`)
               setPost(response.data)
       }
       fetchPost()
    }, [postId])

    return (
        <div className='singlePostComp'>
            <div className="singlePostCompWrapper">
              

                {post.image ? (
        <img className="singlePostCompImg" src={PF+post.image} alt="" />
      ) : (
        <img
          className="singlePostCompImg"
          src="https://random.imagecdn.app/500/150"
          alt=""
        />
      )}


            <h1 className='singlePostCompTitle'>{post.title} <br/> 
           {post.categories?.map((c,i)=>(
             <Link to={`/?cat=${c}`} key={i} className='link'>
                <span className='singlePostCompCategory' >{c} {" "}</span>
</Link>
            ))}
              <div className="singlePostCompEditContainer">
                <i className="fas fa-pencil-alt singlePostCompIcon"></i>
                <i className="fas fa-trash-alt singlePostCompIcon"></i>
              </div>
            </h1>
            <div className="singlePostCompInfo">
                <span className='singlePostCompAuthor'>Author:{" "}  
                
             <Link to={`/?user=${post.username}`} className='link'>
             
                 <b>{post.username}</b>
                
             </Link>
             </span>

                 
                <span className='singlePostCompDate'>{new Date(post.updatedAt).toDateString()}</span>
            </div>
            <p className='singlePostCompDesc'>{post.description}</p>
            </div>
        </div>
    )
}

export default SinglePostComp
