import { Row, Table } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import useManageInventory from "../../../hooks/useManageInventory";
import ManageInventoryDetails from "../ManageInventoryDetails/ManageInventoryDetails";

const ManageInventory = () => {
  const [products, setProducts] = useManageInventory();

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
      toast("Delete Inventory Successfully");
      
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
                <ManageInventoryDetails
                  handleIventoryDelete={handleIventoryDelete}
                  product={product}
                ></ManageInventoryDetails>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
      <div className="d-block mx-auto mb-4 text-center">
        <button className="button-style">
          <Link className="text-decoration-none text-white" to={"/addItem"}>
            Add New Item
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

export default ManageInventory;
