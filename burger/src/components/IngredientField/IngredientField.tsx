import Button from "../Button/Button";


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
      <Button onClick={addComponent} image={component.image} name={component.name} classList={['flex', 'gap-3', 'items-center', 'cursor-pointer']}/>
      <p className="justify-self-end">x: {count}</p>
      <Button onClick={delFunc} name={'delete'} classList={['cursor-pointer', 'justify-self-end']}/>
    </div>
  );
};

export default IngredientField;
