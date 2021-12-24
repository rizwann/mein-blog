
import './header.css'

const Header = () => {
    return (
        <div className="header">
           <div className="headerTitles">
               <span className="headerTitleSm">Mein</span>
               <span className="headerTitleLg">Blog</span>
           </div>
           <img src="https://random.imagecdn.app/700/350" alt="" className='headerImg' />
           
        </div>
    )
}

export default Header
