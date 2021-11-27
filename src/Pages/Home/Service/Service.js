import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardHeader } from "@mui/material";
import { useHistory } from "react-router";

const Service = (props) => {
  const { _id, name, price, description, url } = props.service;
  const history = useHistory();
  const handleBuyNowBtn = (id) => {
    const url = `/serviceDetail/${id}`;
    history.push(url);
  };
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card
        style={{ backgroundColor: "#E7D9EA" }}
        sx={{ maxWidth: 345, height: "100%" }}
      >
        <CardHeader title={name} />
        <CardMedia component="img" height="194" image={url} alt="Paella dish" />
        <CardContent>
          <Typography variant="h6">৳ {price}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Button
            onClick={() => handleBuyNowBtn(_id)}
            variant="contained"
            sx={{ bgcolor: "secondary.main", mt: 2 }}
          >
            Buy Now
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
