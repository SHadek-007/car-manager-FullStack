import { Row } from 'react-bootstrap';
import useManageInventory from '../../../hooks/useManageInventory';
import ManageInventoryDetails from '../ManageInventoryDetails/ManageInventoryDetails';

const ManageInventory = () => {
    const [products, setProducts] = useManageInventory();

    return (
        <div className='container'>
            <h2 className='text-center my-5'>All Inventory List: {products.length}</h2>
            <Row>
            {
                products.map(product => <ManageInventoryDetails key={product._id} product={product}></ManageInventoryDetails>)
            }
            </Row>
        </div>
    );
};

export default ManageInventory;