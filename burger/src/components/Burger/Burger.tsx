import { INGREDIENTS } from "../../globalConstants";


interface Props extends React.PropsWithChildren {
  components: BurgerComponent[];
}

const priceList: {[name:string]: number} = {};
for (const item of INGREDIENTS) priceList[item.name] = item.price;


const Burger: React.FC<Props> = ({ components }) => {
  const mainInner = [];

  for (const item of components) {
    for (let i = 0; i < item.count; i++) mainInner.push(item.name);
  }

  let price = components.reduce((acc, item) => {
    acc += item.count !== 0 ? item.count * item.price : 0;
    console.log(item.count, item.name)
    return acc;
  }, 0);

  return (
    <div className="border-3 border-gray-100 p-6">
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {mainInner.map((componentName, index) => (
          <div key={index} className={componentName}></div>
        ))}
        <div className="BreadBottom"></div>
      </div>
      <h3 className="text-center">Price: {price}</h3>
    </div>
  );
};

export default Burger;
