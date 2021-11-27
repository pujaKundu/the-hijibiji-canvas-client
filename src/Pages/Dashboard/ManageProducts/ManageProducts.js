import { CardMedia, Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardHeader } from "@mui/material";
import { Box } from "@mui/system";

const ManageProducts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `https://sleepy-retreat-03806.herokuapp.com/services`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleCancelBtn = (id) => {
    console.log("delted", id);

    const proceed = window.confirm(
      "Are you sure , you want to delete product?"
    );
    if (proceed) {
      const url = `https://sleepy-retreat-03806.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Successfully deleted");
            const remainingOrders = services.filter(
              (service) => service._id !== id
            );
            setServices(remainingOrders);
          }
        });
    }
  };
  return (
    <Container style={{ backgroundColor: "#F6E5E5", padding: "2%" }}>
      <Typography
        variant="h3"
        style={{ paddingTop: "2% " }}
        sx={{ color: "#352961", my: 4 }}
      >
        Manage All Products
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((service) => (
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardHeader title={service?.paintingName} />
              <CardMedia
                component="img"
                height="194"
                image={service?.url}
                alt="Paella dish"
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography variant="h6">
                  Painting Title:{service?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price:{service?.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service?.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type:{service?.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Size:{service?.size}
                </Typography>
                <Box>
                  <Button
                    onClick={() => handleCancelBtn(service?._id)}
                    variant="contained"
                    sx={{ bgcolor: "error.main", mt: 2 }}
                  >
                    Delete Product
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ManageProducts;
