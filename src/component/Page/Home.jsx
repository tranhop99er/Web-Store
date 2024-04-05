import React from "react";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-dark border-0">
        <img
          src="/assets/images/home/bg.jpg"
          class="card-img"
          alt="Background"
          height="625px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">New Series Products</h5>
            <p class="card-text lead fs-2">
                All The Trends
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
