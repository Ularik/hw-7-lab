import { useState } from "react";
import Burger from "../components/Burger/Burger";
import Menu from "../components/Menu/Menu";
import { INGREDIENTS } from "../globalConstants";


const MenuBurger = () => {
  const [selectedIngr, setSelectedIngr] = useState<BurgerComponent[]>([
    ...INGREDIENTS.map((ingredient) => ({name: ingredient.name, count: 0, price: ingredient.price})),
    {name: 'buns', count: 1, price: 30}
  ]);

  const addComponent = (name: string) => {
    const ingredients = [...selectedIngr];
    ingredients.map((ingrObj) => {
      if (ingrObj.name === name) ingrObj.count++;
      return ingrObj;
    });
    setSelectedIngr(ingredients);
  };

  const defineCounts = (name: string) => {
    const ingredient = selectedIngr.filter((ingr) => ingr.name === name);
    return ingredient.length ? ingredient[0].count : 0;
  };

  const deleteComponent = (name: string) => {
    const selectedIngrCopy = [...selectedIngr];
    const ingredients = selectedIngrCopy.map((ingr) => {
      if (ingr.name === name)
        ingr.count = ingr.count < 1 ? ingr.count : ingr.count - 1;
      return ingr;
    });
    setSelectedIngr(ingredients);
  };


  return (
    <div className="w-[1200px] mx-auto my-8 grid grid-cols-2 gap-3">
        <Menu addComponent={addComponent} deleteComponent={deleteComponent} defineCounts={defineCounts}/>
        <Burger components={selectedIngr}/>
    </div>
  );
};

export default MenuBurger;
