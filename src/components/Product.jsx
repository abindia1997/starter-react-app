import React from "react";
import styles from "./products.module.css"

function Product({ brand, model, minPrice, maxPrice, ram, rom, image }) {
  return (
    <div className={styles.product}>
      <div className={styles.container}>
      <h5 className={styles.brand}>Brand: {brand}</h5>
      <p className={styles.model}>Model: {model}</p>
      <p className={styles.price}>
        Min-Price: {minPrice}
      </p>
      <p className={styles.price}>
       Max-Price: {maxPrice}
      </p>
      <p className={styles.ram}>RAM: {ram}</p>
      <p className={styles.rom}>ROM: {rom}</p>
      <img src={image} alt="Product" className={styles.image} />
      </div>
    </div>
  );
}

export default Product;
