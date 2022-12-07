import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import React from "react";

const Category = () => {
  return (
    <Paper
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "2% 0",
      }}
      sx={{
        bgcolor: "#3F3351",
        ps: 5,
      }}
    >
      <Typography
        variant="h2"
        style={{ color: "#E9A6A6", fontFamily: "Dancing Script, cursive" }}
        sx={{ my: 5, pt: 5 }}
      >
        Categories
      </Typography>
      <Container>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              py: 10,
            }}
          >
            <Grid item xs={12} md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://i.ibb.co/bg9bYWD/fisher.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sketch
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://i.ibb.co/cxtbPWS/punota.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Water Color
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://i.ibb.co/9vC4JGv/marlyn.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Portrait
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://i.ibb.co/zxbs28g/faces.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Canvas
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Paper>
  );
};

export default Category;
