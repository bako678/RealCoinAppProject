import React from "react";
import CategoryList from "../../components/CategoryList/CategoryList.jsx";
import Serach from "../../components/Search/Serach.jsx";
import "./home.css";

const Home = () => {
  return (
    <div className="p-12 w-[1280px] m-auto">
      <Serach />
      <CategoryList />
    </div>
  );
};

export default Home;
