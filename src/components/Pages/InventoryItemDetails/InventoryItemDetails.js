import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const InventoryItemDetails = () => {
  const { InventoryId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${InventoryId}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, []);
  return (
    <div className="">
      <div className="card w-50 mx-auto" >
        <img src={productDetail.img} alt="" />
        <div className="card-body">
        <h2 className="card-title">{productDetail.name}</h2>
          <p className="card-text">Price: {productDetail.price}</p>
          <p className="card-text">Price: {productDetail.quantity}</p>
          <p className="card-text">Price: {productDetail.sname}</p>
          <p className="card-text">Price: {productDetail.description}</p>
          <button className="btn btn-danger">Delivered</button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetails;