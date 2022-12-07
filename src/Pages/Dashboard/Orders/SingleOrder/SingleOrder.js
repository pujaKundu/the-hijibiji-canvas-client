import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardHeader } from "@mui/material";
//not needed
const SingleOrder = (props) => {
  const { _id, paintingName, userName, email, address, phone, state } =
    props.order || {};

  const [orders, setOrders] = useState([]);
  const [updatedOrder, setUpdatedOrder] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    fetch("https://hijibiji-data.onrender.com/allOrders")
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
      });

    fetch(orderUrl, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedOrder),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsUpdated(true);
          alert("updated");
          setUpdatedOrder(result);
        }
      });
  };
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ maxWidth: 345, height: "100%" }}>
        <CardHeader title={paintingName} />
        <CardContent>
          <Typography variant="h6">Ordered by:{userName}</Typography>
          <Typography variant="body2" color="text.secondary">
            Email:{email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone:{phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address:{address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status:{isUpdated === true ? updatedOrder.state : state}
          </Typography>
          <Button
            onClick={() => handleCancelBtn(_id)}
            variant="contained"
            sx={{ bgcolor: "red", mt: 2 }}
            style={{ marginRight: "5px" }}
          >
            Cancel Order
          </Button>
          <Button
            onClick={() => handleUpdateBtn(_id)}
            variant="contained"
            sx={{ bgcolor: "red", mt: 2 }}
          >
            Approve
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default SingleOrder;
