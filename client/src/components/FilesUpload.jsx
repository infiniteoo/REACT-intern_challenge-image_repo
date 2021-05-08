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
  }, [imageData]);

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

      {allPics.length > 0 ? (
        <div>
          {allPics.map((item, index) => (
            <div key={index}>
              <div>{item.name}</div>
              <div>{item.desc}</div>
              {/* <Image src={`data:image/jpg;base64,${encode(item.imgURL)}`}/> */}
              {/* <img src={`data:image/jpeg;base64,${encode(item.imgURL)}`} width={"200px"} height={"200px"}/> */}
              <img src={`${item.imgURL}`} width={"200px"} height={"200px"}/>
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
