import React, { useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";
import { Link } from "react-router-dom";
import Home from "./Home";
import { Carousel } from "react-bootstrap";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import { Grid } from "@mui/material";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div>
      <Home />
      <h2>Top Sellers</h2>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          <Carousel>
            {/* <Carousel showArrows autoPlay showThumbs={false}> */}

            {sellers.map((seller) => (
              <Carousel.Item>
                <div key={seller._id}>
                  <Link to={`/seller/${seller._id}`}>
                    <img
                      className="d-block w-100"
                      src={seller.seller.logo}
                      alt={seller.seller.name}
                      style={{ width: "400px", height: "400px" }}
                    />
                    <Carousel.Caption>
                      <p>{seller.seller.name}</p>
                    </Carousel.Caption>
                  </Link>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      )}
      <h2>Featured Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Container>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div>
              <Grid container>
                {products.map((product) => (
                  <Grid item xs={2} style={{ margin: "40px" }}>
                    <Product key={product._id} product={product}></Product>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Container>
        </>
      )}
    </div>
  );
}
