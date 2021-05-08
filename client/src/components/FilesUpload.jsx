import React, { useState, useEffect } from "react";
import axios from "axios";

const FilesUpload = () => {
  const [allPics, setAllPics] = useState([]);
  const [state, setState] = useState({});
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // query the server for all of the picture objects

    const getEm = async () => {
      let rez = await axios.get("http://localhost:8080");
      setAllPics(rez.data);
    };
    getEm();
  }, [allPics]);

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  function encode(data) {
    let buf = Buffer.from(data);
    let base64 = buf.toString("base64");
    return base64;
  }

  return (
    <>
      <h1>upload an image</h1>
      <hr />
      <div>
        <form
          action="http://localhost:8080/image-upload"
          method="POST"
          encType="multipart/form-data"
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
            <label htmlFor="desc">Image Description</label>
            <textarea
              id="desc"
              name="desc"
              rows="2"
              placeholder="Description"
              onChange={handleChange}
              value={state.desc}
            />
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
      <hr />
      <br />
      <h1>uploaded files</h1>
      <div className="container" style={{display: "flex", flexDirection: "row", flexFlow: "row"}}>
        {allPics.length > 0 ? (
            <>
              {allPics.map((item, index) => (
                <div key={index}>
                  <div>{item.name}</div>
                  <div>{item.desc}</div>
                  <div>{item.user}</div>
                  <img src={`${item.imgURL}`}  height={"200px"}/>
                </div>
              ))}
            </>
          ) 
        : (
          <>
            <h5>Loading..</h5>
          </>
        )}
     </div>
      
       
    </>
  );
};

export default FilesUpload;
