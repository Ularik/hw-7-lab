interface Props extends React.PropsWithChildren {
    onClick: () => void;
    image?: string;
    name: string;
    classList?: string[];
}

const Button: React.FC<Props> = ({ onClick, image, name, classList=[] }) => {
  return (
    <button
      onClick={onClick}
      className={classList.join(' ')}
    >
      {image ? <img className="w-[50px]" src={image} alt={name} /> : null}
      <p>{name}</p>
    </button>
  );
};

export default Button;