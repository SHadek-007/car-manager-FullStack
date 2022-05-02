import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryItemDetails = () => {
  const { InventoryId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [inputQuantity, setInputQuantity] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${InventoryId}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, []);

  const delivered = () => {
    const url = `http://localhost:5000/product/minus/${productDetail._id}`;
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductDetail({
          ...productDetail,
          quantity: productDetail.quantity - 1,
        });
        // console.log(data);
      });
  };
  const reStock = () => {
    const url = `http://localhost:5000/product/plus/${productDetail._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ quantity: inputQuantity }),
    })
      .then((res) => res.json())
      .then((data) =>
        setProductDetail({
          ...productDetail,
          quantity: productDetail.quantity + parseInt(inputQuantity),
        })
      );
  };

  return (
    <div className="">
      <div className="card w-50 mx-auto">
        <img src={productDetail.img} alt="" />
        <div className="card-body">
          <h2 className="card-title">{productDetail.name}</h2>
          <p className="card-text">Price: {productDetail.price}</p>
          <p className="card-text">Quantity: {productDetail.quantity}</p>
          <p className="card-text">Supplier Name: {productDetail.sname}</p>
          <p className="card-text">{productDetail.description}</p>
          <button onClick={delivered} className="btn btn-danger">
            Delivered
          </button>
        </div>
        <div>
          <h4>Re-Stock Item</h4>
          <input
            onBlur={(e) => {
              setInputQuantity(e.target.value);
            }}
            type="number"
            name=""
            placeholder="Add Quantity"
          />
          <br />
          <button onClick={() => reStock()} className="btn btn-success">
            Add Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetails;
