import React from "react";
import { Col, Row } from "react-bootstrap";

const ManageInventoryDetails = ({ product }) => {
  const { name, img, price, description, quantity, sname } = product;
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
            <p><small>{description}</small></p>
            <button className="btn btn-success">Stock Update</button>
          </Col>
        </Row>
      </table>
    </div>
  );
};

export default ManageInventoryDetails;
