import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { Typography } from "@mui/material";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";

const Purchase = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const [serviceDetail, setServiceDetail] = useState({});
  const { name, price } = serviceDetail;
  const { id } = useParams();
  useEffect(() => {
    const url = `https://sleepy-retreat-03806.herokuapp.com/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServiceDetail(data);
      });
  }, []);

  const onSubmit = (data) => {
    data.paintingName = name;
    console.log(data);
    axios
      .post("https://sleepy-retreat-03806.herokuapp.com/orders", data)
      .then((res) => {
        console.log(res);
        alert("Order placed successfully");
        reset();
      });
  };

  return (
    <div>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="h6">Tk. {price}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input readOnly defaultValue={name} />
        <input
          style={{
            width: "90%",
            padding: "2%",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
          }}
          value={user.displayName}
          readOnly
          {...register("userName", { required: true, maxLength: 20 })}
        />
        <input
          style={{
            width: "90%",
            padding: "2%",

            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
          }}
          value={user.email}
          readOnly
          {...register("email", { required: true })}
        />

        <input
          style={{
            width: "90%",
            padding: "2%",

            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
          }}
          placeholder="Enter Address"
          required
          {...register("address")}
        />

        <input
          style={{
            width: "90%",
            padding: "2%",

            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
          }}
          placeholder="Enter Phone Number"
          required
          type="text"
          {...register("phone")}
        />
        <input defaultValue="Pending" type="hidden" {...register("state")} />
        {/* <select hidden {...register("state")}>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
        </select> */}
        <input
          style={{
            backgroundColor: "#3F3351",
            color: "#E9A6A6",
            padding: "2%",
            margin: "15px 0",

            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            width: "95%",
          }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Purchase;
