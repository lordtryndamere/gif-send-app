import { useFetchGifs } from "../hooks/useFetchGifs";
import { Gifitem } from "./Gifitem";
export const GifGrid = ({ category, onDeleteCategory, index }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3> {category} </h3>
        <button
          type="button"
          onClick={() => onDeleteCategory(index)}
          className=" mx-3 mb-3 btn btn-danger btn-sm"
        >
          delete {category.toLowerCase()}
        </button>
      </div>

      {isLoading && <h2>Cargando...</h2>}
      <div className="d-flex flex-row flex-nowrap">
        {images.map((image) => (
          <Gifitem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
