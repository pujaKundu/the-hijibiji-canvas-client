import React from "react";
import ExploreServices from "../../ExploreServices/ExploreServices/ExploreServices";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Reviews from "./Reviews/Reviews";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <ExploreServices></ExploreServices>
      <Category></Category>
      <Reviews></Reviews>
    </div>
  );
};

export default Homepage;
