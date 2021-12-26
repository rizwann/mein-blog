import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/siderbar/SideBar'
import './home.css';
import axios from 'axios'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([])
    const {search} = useLocation()
 

    useEffect(()=>{
       const fetchPosts = async () => {
           const response = await axios.get('posts'+search)
              setPosts(response.data)
       }
         fetchPosts()
    },[search])
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
