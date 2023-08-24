import React from "react";
import Product from "../Product/Product";

import "./ProductList.scss";

const ProductList = ({ products }: any) => {
  console.log(products)
  return (
    <div className="product-lists grid bg-whitesmoke">
      {products?.map((product: any, index: number) => {
        return <Product key={product?.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
