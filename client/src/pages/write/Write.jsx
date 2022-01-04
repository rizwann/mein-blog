import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import './write.css'

const Write = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const[categories,setCategories]=useState([])
    const[selectedCat,setSelectedCat]=useState('')
    const {user} =useContext(Context)

   useEffect(()=>{
      const fetchCat = async ()=>{
        const res = await axios.get('/api/categories')
        setCategories(res.data)
      }
      fetchCat()
   },[])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost={
            username: user.username,
            title,
            description,
            categories: [selectedCat],
        }
        if(image){
                const data = new FormData()
                const imgName = Date.now()+"-"+image.name
                data.append('name', imgName)
                data.append('image', image )
                newPost.image = imgName
                // console.log(data)
                try {
                            await axios.post('/api/upload', data)
                } catch (error) {
                    console.log(error)
                }
                try {
                    const response =  await axios.post('/api/posts',newPost)
                    window.location.replace('/post/'+response.data._id)
                } catch (error) {
                    console.log(error)
                }
        }else{
            try {
                const response =  await axios.post('/api/posts',newPost)
                window.location.replace('/post/'+response.data._id)
            } catch (error) {
                console.log(error)
            }
        }
  
    }
    const handleCat = e =>{
    
        setSelectedCat(e.target.value)

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
<div className="writeFormGroup">
<label htmlFor="categories" style={{marginRight:"10px", fontFamily:"inherit"}}>Categories: </label>
                    <select id="categories" name="category"  onChange={handleCat} >
                        <option value="">Please select a categrory</option>
                        {
                            categories.map(category => (
                                <option  key={category.name}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
</div>

<button className="writeSubmit" type='submit'>Publish</button>
            </form>
        </div>
    )
}

export default Write
