import { useEffect, useState } from "react";
import { Row, Spinner, Table } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const MyItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://car-manager007.herokuapp.com/my-items", {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleIventoryDelete = (id) => {
    const proceed = window.confirm("Are You Sure Want to Delete?");
    if (proceed) {
      const url = `https://car-manager007.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainig = products.filter((product) => product._id !== id);
            setProducts(remainig);
          }
        });
      toast("Delete My Items Successfully");
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-5">
        All Inventory List: {products.length}
      </h2>
      {products.length <= 0 && (
          <div style={{height:'150px'}} className='w-100 d-flex justify-content-center align-items-center'>
          <Spinner animation="border" variant="danger" />
      </div>
        )}
      <Row>
        <Table className="border">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    onClick={() => handleIventoryDelete(product._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <div className="d-block mx-auto mb-4 text-center">
        <button className="button-style">
          <Link className="text-decoration-none text-white" to={"/addItem"}>
            Add Item
          </Link>
        </button>
      </div>
      <Toaster
      position="top-right"
      reverseOrder={false}
      />
    </div>
  );
};

export default MyItems;
