import Post from '../post/Post'
import './posts.css'

const Posts = ({posts}) => {
    return (
        <div className='posts'>
           {
               posts.length>0 ? posts.map(post => <Post key={post._id} post={post}/>) :
                <div className='noPosts'>
                    <h1>No Posts !!!</h1>
                </div>
           }
           
        </div>
    )
}

export default Posts
