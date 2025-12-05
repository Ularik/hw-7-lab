import IngredientField from "../IngredientField/IngredientField";
import { INGREDIENTS } from "../../globalConstants";


interface Props extends React.PropsWithChildren {
  defineCounts: (name: string) => number;
  addComponent: (name: string) => void;
  deleteComponent: (name: string) => void;
}


const Menu: React.FC<Props> = ({ defineCounts, addComponent, deleteComponent }) => {

    return (
      <div className="border-3 border-gray-100">
        <h1>Ingredients</h1>
        <div className="p-5">
          {INGREDIENTS.map((itemObj, index) => (
            <div>
              <IngredientField
                key={index}
                component={itemObj}
                count={defineCounts(itemObj.name)}
                addComponent={() => addComponent(itemObj.name)}
                delFunc={() => deleteComponent(itemObj.name)}
              />
            </div>
          ))}
        </div>
      </div>
    );
};

export default Menu;