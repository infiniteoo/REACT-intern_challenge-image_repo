import React, { useState, useEffect } from "react";
import axios from "axios";

const FilesUpload = () => {
  const [allPics, setAllPics] = useState([]);
  const [state, setState] = useState({});
  const [imageData, setImageData] = useState([])

  useEffect(() => {
    const getPics = async () => {
      let res = await axios.get("http://localhost:8080/");
      
     /*  setAllPics(res.data) */
    
      let TYPED_ARRAY = new Uint8Array(res.data.data)
      console.log(TYPED_ARRAY)
      const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY)
      let base64String = btoa(STRING_CHAR)
      console.log(base64String)
     
      setImageData(base64String)
      
    };
    // query the server for all of the picture objects
    getPics();
  }, [imageData]);

 

  

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
   
  };

  const convertPlz = (base64data) => {
    let b64d = Buffer.from(base64data, "base64").toString()

    setImageData({data: b64d })
    
     

    
       

  }



  return (
    <>
      
      <h1>upload an image</h1>
      <hr />
      <div>
        <form
          action="http://localhost:8080/"
          method="POST"
          encType="multipart/form-data"
        >
          <div>
            <label>Image Title</label>
            <input type="text" id="name" placeholder="Name" name="name" onChange={handleChange} value={state.name}/>
          </div>
          <div>
            <label htmlFor="desc">Image Description</label>
            <textarea id="desc" name="desc" rows="2" placeholder="Description"
              onChange={handleChange} value={state.desc}/>
          </div>
          <div>
            <label htmlFor="image">Upload Image</label>
            <input type="file" id="image" name="image" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      

      {allPics.length > 0 ? (
        <div>
          {allPics.map((item, index) => (
            <div key={index}>
              <div>
              
                <img src={convertPlz(`data:${item.img.contentType};base64,${item.img.data.data.toString('base64')}`)} alt="" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <hr />
          <br />
          <h1>uploaded files</h1>
          <h5>Loading..</h5>
          <img src="image-1620343274021.png" alt="" />
        </>
      )}
    </>
  );
};

export default FilesUpload;
