import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Service from "../../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "https://sleepy-retreat-03806.herokuapp.com/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <Container style={{ marginBottom: "2%" }}>
      <Typography variant="h3" sx={{ color: "secondary.main", my: 4 }}>
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

export default Services;
