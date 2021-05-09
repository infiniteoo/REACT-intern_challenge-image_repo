import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Container,
} from "@material-ui/core";
import useStyles from "./LoginFormStyles";
import axios from 'axios'

const LoginForm = (props) => {
  const [loginAndPassword, setLoginAndPassword] = useState("");
  const classes = useStyles();

  function handleChange(e) {
    const value = e.target.value;
    setLoginAndPassword({
      ...loginAndPassword,
      [e.target.name]: value,
    });

    console.log(loginAndPassword);
  }

  const handleLogin = (e) => {
      e.preventDefault();
      let enteredEmail = document.getElementById("login").value
      let enteredPassword = document.getElementById("pw").value
      
      axios.get(`http://localhost:8080/login/${enteredEmail}/${enteredPassword}`)
      .then((res) => {
          
        props.setUser({
            ...props.user,
            loggedIn: "true",
            email: res.data.email,
            username: res.data.username

        })
        console.log("LOGGED IN USER: ", props.user)  
      })
      .catch((err) => {
          console.log(err)
      })


      
      

  }

  return (
    <>
      <Box style={{ margin: "auto" }}>
        <Container>
          <Typography variant="h4" className={classes.loginLabel}>
            username:
          </Typography>
          <TextField
            id="login"
            type="text"
            name="login"
            onChange={(e) => handleChange(e)}
            value={loginAndPassword.login}
            variant="outlined"
            InputProps={{ className: classes.textField }}
          />

          <Typography variant="h4" className={classes.loginLabel}>
            password:
          </Typography>
          <TextField
            id="pw"
            type="text"
            name="pw"
            onChange={(e) => handleChange(e)}
            variant="outlined"
            value={loginAndPassword.password}
            InputProps={{ className: classes.textField }}
          />
        </Container>
        <Button autoFocus color="secondary" onClick={(e) => handleLogin(e)} fullWidth>
          Submit
        </Button>
      </Box>
    </>
  );
};

export default LoginForm;
