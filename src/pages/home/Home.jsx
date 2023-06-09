import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import AddProduct from "../addProduct/AddProduct";
import ListProdcts from "../listAllProduct/ListProdcts";

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <button onClick={()=>navigate('/view')}>View</button>
      <button onClick={()=>navigate('/add')}>Add</button>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}

export default Home;
