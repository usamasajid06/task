import EditProduct from "../components/EditProduct";
import Products from "../components/Products";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/edit-product" element={<EditProduct />} />
      </Routes>
    </>
  );
};

export default Home;
