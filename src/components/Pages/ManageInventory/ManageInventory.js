import { Row, Table } from "react-bootstrap";
import useManageInventory from "../../../hooks/useManageInventory";
import ManageInventoryDetails from "../ManageInventoryDetails/ManageInventoryDetails";

const ManageInventory = () => {
  const [products, setProducts] = useManageInventory();

  const handleIventoryDelete = (id) => {
    const proceed = window.confirm("Are You Sure Want to Delete?");
    console.log(id);
    if (proceed) {
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
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
              <tr>
                <ManageInventoryDetails
                  handleIventoryDelete={handleIventoryDelete}
                  key={product._id}
                  product={product}
                ></ManageInventoryDetails>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default ManageInventory;
