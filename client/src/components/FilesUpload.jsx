import React, {useState} from 'react'

const FilesUpload = () => {

    const [state, setState] = useState({ })

    const handleClick = (e) => {
        e.preventDefault();
        
        

    }

    const handleChange = (e) => {
        e.preventDefault();
        setState(e.target.value)
        console.log(state)

    }


    return (
    <>
        <h1>upload an image</h1>
        <hr/>
        <div>
            <form>
                <div>
                    <label>Image Title</label>
                    <input type="text" id="name" placeholder="Name"
                        name="name" onChange={handleChange} value={state.name}/>
                </div>
                <div>
                    <label for="desc">Image Description</label>
                    <textarea id="desc" name="desc" rows="2"
                            placeholder="Description" onChange={handleChange} value={state.desc} >
                    </textarea>
                </div>
                <div>
                    <label for="image">Upload Image</label>
                    <input type="file" id="image"
                        name="image" value="" />
                </div>
                <div>
                    <button 
                        type="submit"
                        onClick={(e) => handleClick(e)}
                    >
                            Submit
                    </button>
                </div>
            </form>
      </div> 

       




    </>
    )
}

export default FilesUpload
