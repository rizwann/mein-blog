import './singlePostComp.css'

const SinglePostComp = () => {
    return (
        <div className='singlePostComp'>
            <div className="singlePostCompWrapper">
                <img src="https://random.imagecdn.app/500/150" alt="" className='singlePostCompImg'/>
            <h1 className='singlePostCompTitle'>Lorem ipsum dolor sit amet consectetur 
              <div className="singlePostCompEditContainer">
                <i className="fas fa-pencil-alt singlePostCompIcon"></i>
                <i className="fas fa-trash-alt singlePostCompIcon"></i>
              </div>
            </h1>
            <div className="singlePostCompInfo">
                <span className='singlePostCompAuthor'>Author: <b>Rizwan</b></span>
                <span className='singlePostCompDate'>2 hours ago</span>
            </div>
            <p className='singlePostCompDesc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus excepturi, pariatur laboriosam corporis saepe fugiat ut quod! Rerum facilis earum voluptate dignissimos reprehenderit odio nisi, provident, dicta tenetur temporibus dolorem.
            Veritatis placeat eum aperiam, molestias provident assumenda aspernatur quas blanditiis quia, inventore amet dolore nesciunt nisi soluta. Sit, modi fugit optio in expedita voluptatibus itaque aut suscipit voluptatem, odit quae.
            Provident cum nam fugit assumenda magni iusto expedita temporibus. Culpa doloribus voluptatibus odit iure voluptates natus molestiae sunt nemo ut? Officia maiores itaque numquam recusandae laborum rerum quam harum ad.
            Iure repellat tempora repellendus labore accusamus dolorem quisquam sint, corrupti nulla libero autem eos eum corporis id doloremque culpa tempore beatae! Minus perferendis dolorem eligendi magnam ut natus illum nostrum.</p>
            </div>
        </div>
    )
}

export default SinglePostComp
