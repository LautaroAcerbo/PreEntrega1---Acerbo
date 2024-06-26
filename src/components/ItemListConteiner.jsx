import Container from "react-bootstrap/Container";
import data from "../data/data.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

export const ItemListConteiner = () => {
  const [products, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      if (id) {
        const filteredData = data.filter((d) => d.category === id);
        setProduct(filteredData);
      } else {
        setProduct(data);
      }
    });
  }, [id]);

  return (
    <Container>
      <ItemList products={products} />
    </Container>
  );
};
