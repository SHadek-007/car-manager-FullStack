import { useEffect, useState } from "react";

const useManageInventory = () =>{
    const [products, setProducts ] = useState([]);
    useEffect(()=>{
        fetch('https://car-manager007.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return [products, setProducts];
}
export default useManageInventory;