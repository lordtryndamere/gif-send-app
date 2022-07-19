import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball"]);

  const onAddCategory = (inputValue) => {
    if (categories.includes(inputValue)) return;
    setCategories([inputValue, ...categories]);
  };
  const resetAllCategories = () => {
    setCategories([]);
  };
  const capitalizeFirstLetter = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  const onDeleteCategory = (index) => {
    const actualCategories = [...categories];
    actualCategories.splice(index, 1);
    setCategories(actualCategories);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />
      <div className="container-button">
        <button
          onClick={resetAllCategories}
          type="button"
          className="btn btn-warning btn-sm"
        >
          Reset All
        </button>
      </div>
      {categories.map((category, index) => (
        <GifGrid
          key={category}
          category={capitalizeFirstLetter(category)}
          onDeleteCategory={onDeleteCategory}
          index={index}
        />
      ))}
    </>
  );
};
