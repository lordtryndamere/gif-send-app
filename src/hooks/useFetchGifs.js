import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setisLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []); // El Hook useEffect ejecuta efectos cada que cambia algo que queramos, el primer parametro
  // es simplemente el codigo que queremos ejecutar
  // el segundo parametro son las dependencias, de que depende que se ejecute o cuando cambie ese valor
  // Si las dejamos con un arreglo vacio, unicamente se ejecuta la primera vez que se construye
  return {
    images,
    isLoading,
  };
};
