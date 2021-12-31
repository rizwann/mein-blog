import axios from 'axios'
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import './write.css'

const Write = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const {user} =useContext(Context)

   

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost={
            username: user.username,
            title,
            description
        }
        if(image){
                const data = new FormData()
                const imgName = Date.now()+"-"+image.name
                data.append('name', imgName)
                data.append('image', image )
                newPost.image = imgName
                // console.log(data)
                try {
                            await axios.post('/upload', data)
                } catch (error) {
                    console.log(error)
                }
                try {
                    const response =  await axios.post('/posts',newPost)
                    window.location.replace('/post/'+response.data._id)
                } catch (error) {
                    console.log(error)
                }
        }else{
            try {
                const response =  await axios.post('/posts',newPost)
                window.location.replace('/post/'+response.data._id)
            } catch (error) {
                console.log(error)
            }
        }
  
    }
    return (
        <div className='write'>
         {image && <img src={URL.createObjectURL(image)} alt='img' className="writeImg" />}
            <form  className="writeForm" onSubmit={handleSubmit}>
       <div className="writeFormGroup">
           <label htmlFor="fileInput">
                <i className="fas fa-image writeFormIcon"></i>
           </label>
           <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=> setImage(e.target.files[0])} />
           <input type="text" placeholder='Title for the Post' className='writeInput' autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
           
       </div>
<div className="writeFormGroup">
    <textarea placeholder='Your Story....' type='text' className='writeInput writeText' onChange={e=>setDescription(e.target.value)}></textarea>

</div>
<button className="writeSubmit" type='submit'>Publish</button>
            </form>
        </div>
    )
}

export default Write
