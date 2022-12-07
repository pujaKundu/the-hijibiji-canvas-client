import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import taka from "../../../images/icons/noun_Taka_253241.png";
import Purchase from "../../Purchase/Purchase/Purchase";

const ServiceDetail = () => {
  const [serviceDetail, setServiceDetail] = useState({});
  const { name, description, url, price, type, size } = serviceDetail;
  const { id } = useParams();
  useEffect(() => {
    const url = `https://hijibiji-data.onrender.com/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServiceDetail(data);
      });
  }, [id]);
  return (
    <Container
      style={{ marginBottom: "2%" }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={name} subheader={type} />
            <CardMedia component="img" height="194" image={url} alt={name} />
            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="h6">
                Price:
                <img src={taka} alt="" />
                {price}
              </Typography>
              <Typography sx={{ fontWeight: "bold" }} variant="body1">
                Size: {size}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Purchase></Purchase>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServiceDetail;
