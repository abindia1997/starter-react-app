import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import Swal from "sweetalert2";
import styles from "./addProduct.module.css"

const BaseUrl = "https://carmine-jellyfish-tie.cyclic.app/used-product"

function AddProduct() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    brand: "",
    model: "",
    minPrice: 0,
    maxPrice: 0,
    ram: "",
    rom: "",
    image: "",
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(BaseUrl,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(productData)
    }).then((res)=>{
      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Product data submitted successfully!",
        });
        navigate('/view')
      } else {
        throw new Error("Failed to submit product data");
      }
    }).catch((err)=>{
      console.log(err)
    })


  };

  return (
    <div>
      <h4>Add a Product</h4>
      <div className={styles.container}
      >
        <label>
        <span>Brand:</span>
          <input
            type="text"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <span>Model :</span>
          <input
            type="text"
            name="model"
            value={productData.model}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <span>Min Price :</span>
          <input
            type="number"
            name="minPrice"
            value={productData.minPrice}
            onChange={handleChange}
          ></input>
        </label>
        <label>
         <span>Max Price :</span>
          <input
            type="number"
            name="maxPrice"
            value={productData.maxPrice}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <span>Ram :</span>
          <input
            type="text"
            name="ram"
            value={productData.ram}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <span>Rom :</span>
          <input
            type="text"
            name="rom"
            value={productData.rom}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <span>Image Link :</span>
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleChange}
          ></input>
        </label>
      </div>

      <div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
