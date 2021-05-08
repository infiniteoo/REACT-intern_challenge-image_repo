import React, { useState, useEffect } from "react";
import axios from "axios";

const FilesUpload = () => {
  const [allPics, setAllPics] = useState([]);
  const [state, setState] = useState({});
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // query the server for all of the picture objects
  }, [imageData]);

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

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

      {allPics.length > 0 ? (
        <div>
          {allPics.map((item, index) => (
            <div key={index}>
              <div></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h5>Loading..</h5>
        </>
      )}
    </>
  );
};

export default FilesUpload;
