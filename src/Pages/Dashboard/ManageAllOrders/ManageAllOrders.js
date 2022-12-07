import { Container, Grid, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardHeader } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "../../../Hooks/useAuth";

const ManageAllOrders = () => {
  const { isLoading } = useAuth();
  const [orders, setOrders] = useState([]);
  const [updatedOrder, setUpdatedOrder] = useState({});

  useEffect(() => {
    const url = `https://hijibiji-data.onrender.com/allOrders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleCancelBtn = (id) => {
    console.log("delted", id);

    const proceed = window.confirm("Are you sure , you want to cancel order?");
    if (proceed) {
      const url = `https://hijibiji-data.onrender.com/allOrders/${id}`;
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

  const handleUpdateBtn = (id) => {
    const orderUrl = `https://hijibiji-data.onrender.com/allOrders/${id}`;
    fetch(orderUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdatedOrder(data);
        window.location.reload();
      });

    fetch(orderUrl, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedOrder),
    })
      .then((res) => res.json())
      .then((result) => {
        setUpdatedOrder(result);

        console.log(result);
      });
  };
  return (
    <Container style={{ backgroundColor: "#F6E5E5", padding: "2%" }}>
      <Typography
        variant="h3"
        style={{ paddingTop: "2% " }}
        sx={{ color: "#352961", my: 4 }}
      >
        Manage All Orders
      </Typography>
      {isLoading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {orders.map((order) => (
            <Grid item xs={4} sm={4} md={4}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardHeader title={order?.paintingName} />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography variant="h6">
                    Ordered by:{order?.userName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email:{order?.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Phone:{order?.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Address:{order?.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Status:
                    {order?.state}
                  </Typography>
                  <Box>
                    <Button
                      onClick={() => handleCancelBtn(order?._id)}
                      variant="contained"
                      sx={{ bgcolor: "error.main", mt: 2 }}
                    >
                      Cancel Order
                    </Button>
                    <Button
                      onClick={() => handleUpdateBtn(order?._id)}
                      variant="contained"
                      sx={{ bgcolor: "success.main", mt: 2 }}
                    >
                      Approve
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ManageAllOrders;
