import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = "https://hijibiji-data.onrender.com/reviews";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container sx={{ my: 15 }}>
      <Typography
        variant="h2"
        style={{ fontFamily: "Dancing Script, cursive" }}
        sx={{ mb: 5, color: "#3B185F" }}
      >
        Reviews
      </Typography>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {reviews.map((review) => (
            <Grid item xs={4} sm={4} md={4}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardContent>
                  <Typography variant="h6">
                    <FormatQuoteIcon style={{ transform: " rotate(180deg)" }} />

                    {review?.review}
                    <FormatQuoteIcon />
                  </Typography>

                  <Typography variant="h6" color="text.secondary">
                    - {review?.userName}
                  </Typography>
                  <Rating name="read-only" value={review?.rating} readOnly />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>{" "}
    </Container>
  );
};

export default Reviews;
