import './write.css'

const Write = () => {
    return (
        <div className='write'>
            <img  src="https://random.imagecdn.app/500/150" alt="" className="writeImg" />
            <form  className="writeForm">
       <div className="writeFormGroup">
           <label htmlFor="fileInput">
                <i className="fas fa-image writeFormIcon"></i>
           </label>
           <input type="file" id="fileInput" style={{display:"none"}} />
           <input type="text" placeholder='Title for the Post' className='writeInput' autoFocus={true}/>
       </div>
<div className="writeFormGroup">
    <textarea placeholder='Your Story....' type='text' className='writeInput writeText'></textarea>

</div>
<button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write
