import Post from '../post/Post'
import './posts.css'
import Loader from 'react-loader-spinner'

const Posts = ({posts}) => {
    return (
        <div className='posts'>
           {
               posts.length>0 ? posts.map(post => <Post key={post._id} post={post}/>) :
                <div className='noPosts'>
                    <Loader
  type="Grid"
  color="rgb(42, 148, 167)"
  secondaryColor="rgb(12, 49, 56)"
  height={200}
  width={200}
  timeout={100000} 
/>
                </div>
           }
           
        </div>
    )
}

export default Posts
