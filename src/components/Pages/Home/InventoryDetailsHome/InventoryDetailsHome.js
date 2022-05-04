import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import useManageInventory from "../../../../hooks/useManageInventory";

const InventoryDetailsHome = ({ product }) => {
  const { _id, name, img, price, description, quantity, sname } = product;
  const navigate = useNavigate();

  return (
    <div>
      <table className=" border my-4 w-100">
        <Row className="">
          <Col md={5}>
            <img className="w-100" src={img} alt="" />
          </Col>
          <Col md={7} className="p-3">
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name: {sname}</p>
            <p>
              <small>{description}</small>
            </p>
            <div>
              <button
                onClick={() => navigate(`/inventory/${_id}`)}
                className="btn btn-success me-4"
              >
                Stock Update
              </button>
            </div>
          </Col>
        </Row>
      </table>
    </div>
  );
};

export default InventoryDetailsHome;
