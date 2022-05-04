import React from "react";
import { useNavigate } from "react-router-dom";

const ManageInventoryDetails = ({ product, handleIventoryDelete }) => {
  const {_id, name, img, price, description, quantity, sname } = product;

  const navigate = useNavigate();


  return (
    <>
      <td>{name}</td>
      <td>{quantity}</td>
      <td><button onClick={()=>handleIventoryDelete(product._id)} className="btn btn-danger">Delete</button></td>

    </>
  );
};

export default ManageInventoryDetails;

{/* <table className=" border my-4 w-100">
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
      
      
    </Col>
  </Row>
</table> */}