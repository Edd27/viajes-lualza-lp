interface ICard {
  title: string;
  description: string;
  image: string;
}

export default function Card({ title, description, image }: ICard) {
  return (
    <div className=''>
      <h2>{title}</h2>
      <p>{description}</p>
      <img
        src={image}
        alt={`Imagen de ${title}`}
      />
    </div>
  );
}
