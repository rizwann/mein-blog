import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/siderbar/SideBar'
import './home.css';
import axios from 'axios'

const Home = () => {
    const [posts, setPosts] = useState([])


    useEffect(()=>{
       const fetchPosts = async () => {
           const response = await axios.get('posts')
           console.log(response.data)
              setPosts(response.data)
       }
         fetchPosts()
    },[])
    return (
        <>
           <Header/>
           <div className="home">
               <Posts posts={posts}/>
               <SideBar/>
           </div>
        </>
    )
}

export default Home
