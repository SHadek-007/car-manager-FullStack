import React from "react";

const ManageInventoryDetails = ({ product, handleIventoryDelete }) => {
  const {name, quantity} = product;

  return (
    <>
      <td>{name}</td>
      <td>{quantity}</td>
      <td><button onClick={()=>handleIventoryDelete(product._id)} className="btn btn-danger">Delete</button></td>
    </>
    
  );
};

export default ManageInventoryDetails;