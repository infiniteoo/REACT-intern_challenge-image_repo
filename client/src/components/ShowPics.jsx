import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import useStyles from "./ShowPicsStyles";
import axios from "axios";

const ShowPics = (props) => {
  let { allPics } = props;
  const classes = useStyles();

  const handleDelete = async (e) => {
    /* only allow this if the user.name === requested item to delete's creator */

    // extract the user's name who created the picture that was clicked
    let createdBy =
      e.target.parentNode.parentNode.previousSibling.childNodes[4].innerHTML;
    console.log("createdby", createdBy, "props.user.name", props.user.email);

    /* if (props.user.email === createdBy) {
      console.log("we found a match!!");
      const itemID = e.target.parentElement.id;
      // send axios request to back end to delete with the id
      axios
        .delete(`http://localhost:8080/delete/${itemID}`)
        .then((res) => {
          axios
            .get("http://localhost:8080")
            .then((res) => props.setAllPics(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("no match. CANNOT DELETE.");
    } */
  };

  return (
    <>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {allPics.map((picture) => (
            <Grid item key={picture.imgURL} xs={12} sm={6} md={4}>
              <Card className={classes.picture}>
                <CardMedia
                  className={classes.cardMedia}
                  image={picture.imgURL}
                  title={picture.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    {" "}
                    {picture.name}
                  </Typography>
                 
                  <Typography>{picture.desc}</Typography>
                  <br/>
                  <Typography color="textSecondary">Uploader:</Typography>
                  <Typography id="creator">{picture.user}</Typography>
                </CardContent>
                <CardActions>
                  {/*  <Button size="small" color="primary">
                    View
                  </Button> */}
                  <Button
                    size="small"
                    color="primary"
                    id={picture._id}
                    onClick={(e) => handleDelete(e)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ShowPics;
