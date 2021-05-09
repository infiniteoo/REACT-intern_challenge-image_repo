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
import { v4 as uuidv4 } from 'uuid';


const App = () => {
  const [allPics, setAllPics] = useState([]);
  // until user authenticates, we give the guest user a random name and email
  const [user, setUser] = useState({name: uuidv4(), email: uuidv4(), loggedIn: "false"})
  const classes = useStyles();
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Shopify™ Images</Typography>
          <FileUpload allPics={allPics} setAllPics={setAllPics} user={user} setUser={setUser} />
          
        </Toolbar>
      </AppBar>
      
      {allPics.length > 0 ? (
        <ShowPics allPics={allPics} setAllPics={setAllPics} user={user} setUser={setUser} />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default App;
