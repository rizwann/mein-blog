
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/siderbar/SideBar'
import './home.css'

const Home = () => {
    return (
        <>
           <Header/>
           <div className="home">
               <Posts/>
               <SideBar/>
           </div>
        </>
    )
}

export default Home
