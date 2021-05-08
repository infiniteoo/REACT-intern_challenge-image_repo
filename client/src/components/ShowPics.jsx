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


const ShowPics = (props) => {
    let { allPics  } = props
    const classes = useStyles();
    return (
       <>
          <CssBaseline />
          <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {allPics.map((card) => (
            <Grid item key={card.imgURL} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.imgURL}
                  title={card.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5"> {card.name}</Typography>
                  <Typography>
                    {card.desc}
                   
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
       
       </>

    )
}

export default ShowPics
