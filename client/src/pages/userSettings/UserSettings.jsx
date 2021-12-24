import SideBar from '../../components/siderbar/SideBar'
import './userSettings.css'

const UserSettings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
               <div className="settingsTitle">
                   <span className="settingsUpdateTitle">Update Your Account</span>
                   <span className="settingsDeleteTitle">Delete Your Accout</span>
               </div>
               <form className='settingsForm'>

<label >Profile Picture</label>
<div className="settingsPP">
    <img src="https://random.imagecdn.app/450/350" alt="" />
    <label htmlFor="fileInput"><i className='far fa-user-circle settingsPPIcon'></i></label>
    <input type="file" style={{display:"none"}} id="fileInput"/>
</div>
<label >Username</label>
<input type="text" placeholder='Rizwan' />
<label >Email</label>
<input type="email" placeholder='rizwan@sizan.com' />      
<label >Password</label>
<input type="password"  />     
<button className="settingsSubmit">Update</button>    
               </form>
            </div>
            <SideBar/>
        </div>
    )
}

export default UserSettings
