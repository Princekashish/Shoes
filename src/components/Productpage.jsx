import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Productpage() {
  const { id } = useParams();
  const [productinfo, setProductinfo] = useState({});

  useEffect(() => {
    const fetchlist = async () => {
      try {
        const respon = await axios.get("https://fakestoreapi.com/products/"+id);
        setProductinfo(respon.data);
        console.log(respon.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchlist();
  }, []);

  return (
    <div className="font-Rubik">
      <div className="p-2 gap-5">
        <img src={productinfo.image} alt="" />
        <h1>{productinfo.title}</h1>
      </div>
    </div>
  );
}
