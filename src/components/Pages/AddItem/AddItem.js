import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import auth from "../../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [sname, setSname] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSname = (e) => {
    setSname(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const product = { name, sname, price, quantity, description, photo };
    fetch("https://car-manager007.herokuapp.com/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...product, email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Add Item Successfully");
      });
  };

  return (
    <div className="w-50 mx-auto mt-5">
      <Form onSubmit={handleForm} className="border p-3">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            name="name"
            onBlur={handleName}
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            name="sname"
            onBlur={handleSname}
            type="text"
            placeholder="Supplier Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Control
            name="price"
            onBlur={handlePrice}
            type="number"
            placeholder="Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Control
            name="quantity"
            onBlur={handleQuantity}
            type="number"
            placeholder="Quantity"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            name="description"
            onBlur={handleDescription}
            type="text"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            name="photo"
            onBlur={handlePhoto}
            type="text"
            placeholder="Photo URL"
          />
        </Form.Group>
        <Button
          className="text-center d-block mx-auto"
          variant="primary"
          type="submit"
        >
          Add Item
        </Button>
      </Form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddItem;
