import axios from "axios";
import { useContext, useState } from "react";
import SideBar from "../../components/siderbar/SideBar";
import { Context } from "../../context/Context";
import "./userSettings.css";

const UserSettings = () => {

    const { user, dispatch } = useContext(Context);
  const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const PF = "https://meinblog-backend.herokuapp.com/images/";


  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "UPDATE_START" });
    const updatedUser={
        userId: user._id,
        username,
        email,
        password
    }
    if(image){
            const data = new FormData()
            const imgName = Date.now()+"-"+image.name
            data.append('name', imgName)
            data.append('image', image )
            updatedUser.profilePicture = imgName
            // console.log(data)
            try {
                 await axios.post('/upload', data)
            } catch (error) {
                console.log(error)
            }
            try {
             const res = await axios.put('/users/'+user._id,updatedUser)
           
             setSuccess(true)
             setImage(null)
             dispatch({type:'UPDATE_SUCCESS',payload:res.data})
            //  try {
            //     await axios.put('/posts/?postUser='+user.username, updatedUser.username)
            //  } catch (error) {
            //      console.log(error)
            //  }
             
            //    window.location.reload(true)
            } catch (error) {
                dispatch({type:'UPDATE_FAIL'})
                console.log(error)
            }
    }else{
        try {
        const res =   await axios.put('/users/'+user._id,updatedUser)
        dispatch({type:'UPDATE_SUCCESS',payload:res.data})
        setSuccess(true)
        // try {
        //     await axios.put('/posts/?postUser='+user.username, updatedUser.username)
        //  } catch (error) {
        //      console.log(error)
        //  }
        
          // window.location.reload(true)
        } catch (error) {
            dispatch({type:'UPDATE_FAIL'})
            console.log(error)
        }
    }

}


const handleDelete = async (e)=>{
e.preventDefault()

try {
  await axios.delete('/users/'+user._id, {data:{userId:user._id}} )
  window.alert("Your Account has been Deleted")
  dispatch({type: 'DELETE_SUCCESS'})
} catch (error) {
  console.log(error)
}
 
}


  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle" onClick={handleDelete}>Delete Your Accout</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
          {image ? <img src={URL.createObjectURL(image)} alt='img'  /> : <img src={PF+user.profilePicture} alt="dbImg" />}
            
            <label htmlFor="fileInput">
              <i className="far fa-user-circle settingsPPIcon"></i>
            </label>
            <input type="file" style={{ display: "none" }} id="fileInput" onChange={(e)=>setImage(e.target.files[0])} />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} value={username} onChange={e=>setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder={user.email} value={email} onChange={e=>setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)} required />
          <button className="settingsSubmit" type="submit">Update</button>
        </form>
        {success ? <div className="settingsSuccess" style={{color:"green", textAlign:"center", marginTop:"40px"}}>You've Successfully Updated Your Profile</div> : null}
      </div>
      <SideBar />
    </div>
  );
};

export default UserSettings;
