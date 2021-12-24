import SideBar from '../../components/siderbar/SideBar';
import SinglePostComp from '../../components/singlePostComp/SinglePostComp';
import './singlePost.css'


const SinglePost = (props) => {

    return(
        <div className="singlePost">
           <SinglePostComp/>


           <SideBar/>
            </div>

    )

}
export default SinglePost;