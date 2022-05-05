import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
// import useManageInventory from "../../../../hooks/useManageInventory";
import './InventoryDetailsHome.css';

const InventoryDetailsHome = ({ product }) => {
  const { _id, name, img, price, description, quantity, sname } = product;
  const navigate = useNavigate();

  return (
    <div>
      <Col>
        <Card className="card-style p-3 bg-light">
          <Row>
            <Col xs={12} md={6} className="d-flex align-items-center">
              <div>
              <img className="w-100 rounded shadow border border-5" src={img} alt="" />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Card.Body>
                <Card.Title className="name-text">{name}</Card.Title>
                <p className="my-0 text-primary"><small>{sname}</small></p>
                <p className="my-0">Quantity: {quantity}</p>
                <Card.Text className="mt-1"><small>{description}</small></Card.Text>
                <Card.Title className="name-text">{price}</Card.Title>
                <button
                onClick={() => navigate(`/inventory/${_id}`)}
                className=" button-style me-4">
                Stock Update
              </button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
};

export default InventoryDetailsHome;
