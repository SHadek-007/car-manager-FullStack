import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './InventoryItemDetails.css';

const InventoryItemDetails = () => {
  const { InventoryId } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [inputQuantity, setInputQuantity] = useState(0);
  useEffect(() => {
    fetch(`https://car-manager007.herokuapp.com/product/${InventoryId}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, []);

  const delivered = () => {
    const url = `https://car-manager007.herokuapp.com/product/minus/${productDetail._id}`;
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        setProductDetail({
          ...productDetail,
          quantity: productDetail.quantity - 1,
        });
      });
  };
  const reStock = () => {
    const url = `https://car-manager007.herokuapp.com/product/plus/${productDetail._id}`;
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
      <div className="card mx-auto my-4 inventory-style bg-light shadow">
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
          <div className="text-center mx-auto border p-2 mt-2 bg-secondary rounded">
          <h6 className="text-white">Re-Stock Item</h6>
          <input className="items-input ps-2 py-1 rounded "
            onBlur={(e) => {
              setInputQuantity(e.target.value);
            }}
            type="number"
            name=""
            placeholder="Add Quantity"
          />
          <br />
          <button onClick={() => reStock()} className="button-style mt-2">
            Add Now
          </button>
        </div>
        <div className="text-center ">
            <button className="button-style mt-2 px-3 py-2">
              <Link
                className="text-decoration-none text-white"
                to={"/manage-inventory"}>
                Manage Inventories
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemDetails;
