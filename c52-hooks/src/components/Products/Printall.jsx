import React, { useEffect, useState } from "react";

export const Printall = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("http://localhost:1000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container">
      {products.length > 0 ? (
        products.map((p) => <div key={p.id}>{p.name}</div>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
