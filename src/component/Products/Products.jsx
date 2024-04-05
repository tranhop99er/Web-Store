import React, { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import { NavLink } from "react-router-dom";


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMouted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMouted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMouted = false;
      };
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (category) => {
    const updateList = data.filter((x) => {
      return x.category === category;
    });
    console.log(updateList);
    return setFilter(updateList);
  };

  

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's Clothing
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelery
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronics
          </div>
        </div>

        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  class="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div class="card-body">
                  <h5 class="card-title mb-0">
                    {product.title.substring(0, 20)}...
                  </h5>
                  <p class="card-text lead fw-bold">${product.price}</p>
                  <NavLink
                    to={`/products/${product.id}`}
                    className="btn btn-dark ms-2 px-3 py-2"
                  >
                    Buy Now
                  </NavLink>
                  {/* <NavLink
                    to={`/products/${product.id}`}
                    class="btn btn-outlline-dark"
                  >
                    Buy Now
                  </NavLink> */}
                </div>
              </div>
            </div>
          );
        })}


      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
