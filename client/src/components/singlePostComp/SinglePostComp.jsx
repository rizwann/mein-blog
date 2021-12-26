import './singlePostComp.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios'

const SinglePostComp = () => {
    const location = useLocation();
    const postId  = location.pathname.split('/')[2]
    const [post, setPost] = useState({})

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
        <img className="singlePostCompImg" src={post.image} alt="" />
      ) : (
        <img
          className="singlePostCompImg"
          src="https://random.imagecdn.app/500/150"
          alt=""
        />
      )}


            <h1 className='singlePostCompTitle'>{post.title}
              <div className="singlePostCompEditContainer">
                <i className="fas fa-pencil-alt singlePostCompIcon"></i>
                <i className="fas fa-trash-alt singlePostCompIcon"></i>
              </div>
            </h1>
            <div className="singlePostCompInfo">
                <span className='singlePostCompAuthor'>Author: <b>{post.username}</b></span>
                <span className='singlePostCompDate'>{new Date(post.updatedAt).toDateString()}</span>
            </div>
            <p className='singlePostCompDesc'>{post.description}</p>
            </div>
        </div>
    )
}

export default SinglePostComp
