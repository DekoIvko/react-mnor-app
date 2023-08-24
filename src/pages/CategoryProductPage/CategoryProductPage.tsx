import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncProductsOfCategory,
  getAllProductsByCategory,
  getAllProductsByCategoryStatus,
} from "../../store/categorySlice";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";

import "./CategoryProductPage.scss";

const CategoryProductPage = () => {
  const dispatch = useDispatch<any>();
  const { category }: any = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);
  const categoryProductsStatus = useSelector(getAllProductsByCategoryStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <div className="cat-products">
      <div className="container">
        <div className="title-md">
          <h3 className="text-capitalize">{category.replace("-", " ")}</h3>
        </div>
        {categoryProductsStatus === STATUS.LOADING ? (
          <Loader />
        ) : (
          <ProductList products={categoryProducts} />
        )}
      </div>
    </div>
  );
};

export default CategoryProductPage;
