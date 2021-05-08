import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData from 'form-data'


const FilesUpload = (props) => {
  const { allPics, setAllPics } = props;
  const [state, setState] = useState({name: "", desc: ""});
  const [selectedFile, setSelectedFile] = useState(null)
    
  const getEm = () => {
    axios.get("http://localhost:8080").then((res) => setAllPics(res.data));
    /* setAllPics(rez.data); */
    
  };

  useEffect(() => {
    // query the server for all of the picture objects

   
    getEm();
  }, []);

 

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });

    console.log(state)
  }

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = document.getElementById('picUploadForm')

    let formData = new FormData(form);

  

  
   
   
    const url = "http://localhost:8080/image-upload"

    const config = {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      }
  }
   
  const getEm = () => {
    axios.get("http://localhost:8080").then((res) => setAllPics(res.data));
    /* setAllPics(rez.data); */
    
  };
    
    console.log('pre-send', state.name, state.desc, selectedFile)
    console.log('FORM DATA', formData)
    axios.post(url,formData, config)
    .then((res) => {
      setState({name: "", desc: ""})
      getEm()
    })
    .catch((err) => alert("File Upload Error"))

   
   
     
   

  }

  return (
    <>
      
      <hr />
      <div>
        <form
          id="picUploadForm"
        /* action="http://localhost:8080/image-upload"
          method="POST" 
          
          encType="multipart/form-data" */
          
          
        >
          <div>
            <label>Image Title</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              onChange={(e) =>handleChange(e)}
              value={state.name}
            />
          </div>
          <div>
            <label htmlFor="desc">Image Description</label>
            <textarea
              id="desc"
              name="desc"
              rows="2"
              placeholder="Description"
              onChange={(e) =>handleChange(e)}
              value={state.desc}
            />
          </div>
          <div>
            <label htmlFor="image">Upload Image</label>
            <input type="file" id="image" name="image" value={selectedFile?.filename}
            onChange={(e) => setSelectedFile(e.target.files[0])} required />
          </div>
          <div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
          </div>
        </form>
      </div>
      <hr />
      <br />
      
      
       
    </>
  );
};

export default FilesUpload;
