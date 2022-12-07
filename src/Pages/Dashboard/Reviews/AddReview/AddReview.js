import { Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
const AddReview = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://hijibiji-data.onrender.com/reviews", data)
      .then((res) => {
        console.log(res);
        alert("Review added successfully");
        reset();
      });
  };
  return (
    <div style={{ backgroundColor: "#F3F1F5", marginTop: "-1" }}>
      <Typography
        variant="h3"
        style={{
          padding: "3% 0",
        }}
      >
        Add Your Review Here
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
          value={user.displayName}
          readOnly
          {...register("userName")}
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
          value={user.email}
          type="email"
          readOnly
          {...register("email")}
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
          type="text"
          placeholder="Review"
          {...register("review")}
        />

        <input
          style={{
            width: "80%",
            padding: "10px",
            border: "none",
            boxShadow: "1px 0px 5px #7F7C82",
            margin: "15px 0",
          }}
          type="number"
          id="vol"
          name="vol"
          min="1"
          max="5"
          placeholder="Rate our service between 1 to 5"
          {...register("rating")}
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
    </div>
  );
};

export default AddReview;
