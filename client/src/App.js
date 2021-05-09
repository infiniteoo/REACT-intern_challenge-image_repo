import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ShowPics from "./components/ShowPics";
import {
  CircularProgress,
  AppBar,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./AppStyles";

const App = () => {
  const [allPics, setAllPics] = useState([]);
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Shopify™ Images</Typography>
          <FileUpload allPics={allPics} setAllPics={setAllPics} />
        </Toolbar>
      </AppBar>
      
      {allPics.length > 0 ? (
        <ShowPics allPics={allPics} setAllPics={setAllPics} />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default App;
