interface Props extends React.PropsWithChildren {
  component: Ingredient;
  count: number;
  addComponent: () => void;
  delFunc: () => void;
}

const IngredientField: React.FC<Props> = ({
  component,
  count,
  addComponent,
  delFunc,
}) => {
  return (
    <div className="mt-2 grid grid-cols-[1fr_50px_100px] gap-2 items-center ">
      <button
        onClick={addComponent}
        className="flex gap-3 items-center cursor-pointer"
      >
        <img className="w-[50px]" src={component.image} alt={component.name} />
        <p>{component.name}</p>
      </button>

      <p className="justify-self-end">x: {count}</p>
      <button
        type="button"
        className="cursor-pointer justify-self-end"
        onClick={delFunc}
      >
        delete
      </button>
    </div>
  );
};

export default IngredientField;
