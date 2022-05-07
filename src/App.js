import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/Pages/About/About";
import AddItem from "./components/Pages/AddItem/AddItem";
import Blogs from "./components/Pages/Blogs/Blogs";
import Home from "./components/Pages/Home/Home/Home";
import InventoryItemDetails from "./components/Pages/InventoryItemDetails/InventoryItemDetails";
import Login from "./components/Pages/Login/Login/Login";
import Register from "./components/Pages/Login/Register/Register";
import ManageInventory from "./components/Pages/ManageInventory/ManageInventory";
import MyItems from "./components/Pages/MyItems/MyItems";
import NotFound from "./components/Pages/NotFound/NotFound";
import RequireAuth from "./components/Pages/RequireAuth/RequireAuth";
import Footer from "./components/Pages/Shared/Footer/Footer";
import Header from "./components/Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/inventory/:InventoryId"
          element={<RequireAuth><InventoryItemDetails></InventoryItemDetails></RequireAuth>}
        ></Route>
        <Route
          path="/manage-inventory"
          element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}
        ></Route>
        <Route path="/my-items" element={<RequireAuth><MyItems /></RequireAuth>}></Route>
        <Route path="/addItem" element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
