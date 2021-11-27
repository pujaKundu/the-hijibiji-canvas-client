import { Container, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://sleepy-retreat-03806.herokuapp.com/services", data)
      .then((res) => {
        alert("Added product successfully");
        reset();
      });
  };
  return (
    <Container style={{ backgroundColor: "#F3F1F5", marginTop: "-1" }}>
      <Typography
        style={{
          padding: "3% 0",
        }}
        variant="h3"
      >
        Add Product
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{
            width: "80%",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            boxShadow: "1px 0px 5px #7F7C82",
            margin: "15px 0",
          }}
          placeholder="Painting Title"
          {...register("name")}
        />
        <input
          style={{
            width: "80%",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            boxShadow: "1px 0px 5px #7F7C82",
            margin: "15px 0",
          }}
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <textarea
          style={{
            width: "80%",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            boxShadow: "1px 0px 5px #7F7C82",
            margin: "15px 0",
          }}
          placeholder="Description"
          {...register("description")}
        />
        <input
          style={{
            width: "80%",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            boxShadow: "1px 0px 5px #7F7C82",
            margin: "15px 0",
          }}
          placeholder="Image Url"
          {...register("url")}
        />
        <input
          style={{
            width: "80%",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            boxShadow: "1px 0px 5px #7F7C82",
            margin: "15px 0",
          }}
          placeholder="Painting Type"
          {...register("type")}
        />
        <input
          style={{
            width: "80%",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            boxShadow: "1px 0px 5px #7F7C82",
            margin: "15px 0",
          }}
          placeholder="Artist"
          {...register("artist")}
        />
        <input
          style={{
            width: "80%",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            boxShadow: "1px 0px 5px #7F7C82",
            margin: "15px 0",
          }}
          placeholder="Size"
          {...register("size")}
        />

        <input
          style={{
            backgroundColor: "#1F1D36",
            color: "white",
            padding: "10px",
            margin: "15px 0",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer",
            width: "60%",
          }}
          type="submit"
        />
      </form>
    </Container>
  );
};

export default AddProduct;
