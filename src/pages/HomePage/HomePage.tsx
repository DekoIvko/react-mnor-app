import React, { useEffect } from "react";
import HeadSlider from "../../components/HeadSlider/HeadSlider";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/categorySlice";
import {
  fetchAsyncProducts,
  getAllProductStatus,
  getAllProducts,
} from "../../store/productSlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import "./HomePage.scss";

const HomePage = () => {
  const dispatch = useDispatch<any>();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductStatus);

  const catProductsOne = products?.filter(
    (product: any) => product.category === categories[0]
  );
  const catProductsTwo = products?.filter(
    (product: any) => product.category === categories[1]
  );
  const catProductsThree = products?.filter(
    (product: any) => product.category === categories[2]
  );
  const catProductsFour = products?.filter(
    (product: any) => product.category === categories[3]
  );
  const catProductsFive = products?.filter(
    (product: any) => product.category === categories[4]
  );
  console.log(catProductsOne);
  return (
    <main>
      <div className="slider-wrapper">
        <HeadSlider />
      </div>
      <div className="main-content bg-whitesmoke">
        <div className="container">
          <div className="categories py-5">
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsOne} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsTwo} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsThree} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsFour} />
              )}
            </div>
            <div className="categories-item">
              <div className="title-md">
                <h3>{categories[4]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductList products={catProductsFive} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
