import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Service from "../../Home/Service/Service";

const ExploreServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "https://hijibiji-data.onrender.com/services";
    fetch(url)
      .then((res) => res.json()
      .then((data) => {
        //console.log(data);
        const limitedData = data.slice(0, 6);
        setServices(limitedData);
      }))
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Typography
        variant="h2"
        sx={{ color: "#3B185F", my: 8, fontFamily: "Dancing Script, cursive" }}
      >
        Explore Our Artworks
      </Typography>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default ExploreServices;
