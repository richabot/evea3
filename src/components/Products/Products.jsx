import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// eslint-disable-next-line
import { Link, Navigate } from "react-router-dom";
// eslint-disable-next-line
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8080/products",
      method: "GET",
    }).then((res) => setData(res.data));
  }, []);
  return <div>
 <div >
        {data.map((el)  => (
          <div>
           
            <div><h3>Title : {el.name}</h3></div>
            <div><h4>Type : {el.description}</h4></div>
            
          </div>
        ))}
      </div>
  </div>;
};

export default Products;
