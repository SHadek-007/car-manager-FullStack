import { useEffect, useState } from "react";
import { Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/my-items", {
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
      const url = `http://localhost:5000/product/${id}`;
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
      console.log("deleting user id", id);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center my-5">
        All Inventory List: {products.length}
      </h2>
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
        <button className="btn btn-info">
          <Link className="text-decoration-none text-white" to={"/addItem"}>
            Add Item
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MyItems;
