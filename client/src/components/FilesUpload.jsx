import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";
import FilePicker from "./FilePicker";
import { Typography, TextField, Button, Box } from "@material-ui/core";
import useStyles from "./FileUploadStyles";

const FilesUpload = (props) => {
  const classes = useStyles();
  const { setAllPics } = props;
  const [state, setState] = useState({ name: "", desc: "" });
  const [selectedFile, setSelectedFile] = useState(null);

  const getEm = () => {
    axios.get("http://localhost:8080").then((res) => setAllPics(res.data));
  };

  useEffect(() => {
    // query the server for all of the picture objects

    getEm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });

    console.log(state);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let form = document.getElementById("picUploadForm");

    let formData = new FormData(form);

    formData.append("image", selectedFile);

    const url = "http://localhost:8080/image-upload";

    const config = {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    };

    const getEm = () => {
      axios.get("http://localhost:8080").then((res) => setAllPics(res.data));
      /* setAllPics(rez.data); */
    };

    axios
      .post(url, formData, config)
      .then((res) => {
        setState({ name: "", desc: "" });
        getEm();
      })
      .catch((err) => alert("File Upload Error"));
  };

  return (
    <>
      <hr />
      <Box className={classes.uploadContainer}>
        <form id="picUploadForm">
          <Typography variant="caption">Title: </Typography>
          <TextField
            id="name"
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            value={state.name}
            InputProps={{ className: classes.textField }}
          />

          <Typography variant="caption">Description: </Typography>
          <TextField
            id="desc"
            type="text"
            name="desc"
            onChange={(e) => handleChange(e)}
            value={state.desc}
            InputProps={{ className: classes.textField }}
          />
          <FilePicker
            buttonProps={{
              color: "secondary",
            }}
            id="image"
            type="file"
            name="image"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
              console.log(selectedFile);
            }}
            value={selectedFile}
          />

          <Button
            type="submit"
            variant="contained"
            color="default"
            onClick={(e) => handleSubmit(e)}
            className={classes.uploadButton}
            InputProps={{ className: classes.textField }}
          >
            Upload Image
          </Button>
        </form>
      </Box>
      <hr />
      <br />
    </>
  );
};

export default FilesUpload;
