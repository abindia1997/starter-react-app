import React, { useState, useEffect } from "react";
import Product from "../../components/Product";

function ListProdcts() {
  const [productsData, setProductsData] = useState([]);

  const fecthData = async () => {
    try {
      const req = await fetch(
        "https://carmine-jellyfish-tie.cyclic.app/used-product"
      );
      const res = await req.json();
      setProductsData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <div>
      <h3>View Prodcts</h3>
      <p>Total Products {productsData.length}</p>
      {productsData.length &&
        productsData.map((item) => (
          <div key={item.id}>
            <Product {...item} />
          </div>
        ))}
    </div>
  );
}

export default ListProdcts;
