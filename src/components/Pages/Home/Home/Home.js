import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useManageInventory from '../../../../hooks/useManageInventory';
import ManageInventory from '../../ManageInventory/ManageInventory';
import ManageInventoryDetails from '../../ManageInventoryDetails/ManageInventoryDetails';
import Services from '../../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import OurDetails from '../OurDetails/OurDetails';
import Partners from '../Partners/Partners';

const Home = () => {
    const [products, setProducts] = useManageInventory();
    const homeInventories = products.slice(0,6);
    return (
        <div>
            <Banner></Banner>
            {/* <ManageInventory></ManageInventory> */}
            <div>
                <h2 className="text-center my-4">Inventory List: {homeInventories.length}</h2>
                <div>
                    <Container>
                        <Row>
                            {
                                homeInventories.map(product => <ManageInventoryDetails key={product._id} product={product}></ManageInventoryDetails>)
                            }
                        </Row>
                    </Container>
                    <div className="text-center pb-4 mt-4">
            <button className="b-style btn btn-success mt-4 px-3 py-2"><Link className="text-decoration-none text-white" to={'/manage-inventory'}>Manage Inventories</Link></button>
            </div>
                </div>
            </div>
            <Services></Services>
            <OurDetails></OurDetails>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;