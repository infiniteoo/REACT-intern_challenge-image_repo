import React, { useState, useEffect } from "react";
import axios from "axios";
import fs from "fs";

import { fromEvent } from "file-selector";

const FilesUpload = () => {

  useEffect(() => {
      // query the server for all of the picture objects
        console.log(getPics())
      

  }, [])

  const getPics = async () => {

    let allPics = await axios.get('http://localhost:8080/')
    console.log('all pics', allPics)

  }

  const [state, setState] = useState({});

 /*  useEffect(() => {
    const input = document.getElementById("image");
    input.addEventListener("change", async (evt) => {
      const files = await fromEvent(evt);
      console.log(files);
    });
  }, []); */

  /* const handleClick = async (e) => {
        e.preventDefault();

        
        try {
            axios.post('http://localhost:8080/', {
                name: state.name,
                desc: state.desc,
                img: 'img'
            })
            .then((res) => console.log(res))
            
        } catch (error) {
            console.log(error)
        }
        
        
        
        

    } */

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
    console.log(state);
  };

  return (
    <>
      <h1>upload an image</h1>
      <hr />
      <div>
        <form
          action="http://localhost:8080/"
          method="POST"
          enctype="multipart/form-data"
        >
          <div>
            <label>Image Title</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={state.name}
            />
          </div>
          <div>
            <label for="desc">Image Description</label>
            <textarea
              id="desc"
              name="desc"
              rows="2"
              placeholder="Description"
              onChange={handleChange}
              value={state.desc}
            ></textarea>
          </div>
          <div>
            <label for="image">Upload Image</label>
            <input type="file" id="image" name="image" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FilesUpload;
