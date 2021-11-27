import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import useAuth from "../../../../Hooks/useAuth";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardHeader } from "@mui/material";

const Orders = () => {
  const { user, isLoading } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = `https://sleepy-retreat-03806.herokuapp.com/orders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleCancelBtn = (id) => {
    console.log("delted", id);

    const proceed = window.confirm("Are you sure , you want to cancel order?");
    if (proceed) {
      const url = `https://sleepy-retreat-03806.herokuapp.com/allOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Successfully deleted");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <Container style={{ marginTop: "-1%" }}>
      <Typography variant="h3" style={{ color: "#3F3351", marginBottom: "2%" }}>
        My Orders
      </Typography>
      {!isLoading && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {orders.map((order) => (
            <Grid item xs={4} sm={4} md={4}>
              <Card
                style={{ backgroundColor: "#F0D9FF" }}
                sx={{ maxWidth: 345, height: "100%" }}
              >
                <CardHeader colr="secondary.main" title={order?.paintingName} />

                <CardContent sx={{ textAlign: "left" }}>
                  <Typography variant="h6">
                    Ordered by:
                    {order?.userName}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    <span style={{ fontWeight: "bold" }}>Email:</span>
                    {order?.email}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    <span style={{ fontWeight: "bold" }}>Phone:</span>
                    {order?.phone}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    style={{ textTransform: "uppercase" }}
                  >
                    <span style={{ fontWeight: "bold" }}>Address:</span>
                    {order?.address}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    <span style={{ fontWeight: "bold" }}>Status:</span>
                    {order?.state}
                  </Typography>
                  <Button
                    onClick={() => handleCancelBtn(order?._id)}
                    variant="contained"
                    sx={{ bgcolor: "error.main", mt: 2 }}
                  >
                    Cancel Order
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {isLoading && <CircularProgress color="secondary" />}
    </Container>
  );
};

export default Orders;
