const Pokemoncard = ({ name, img, type }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt="" />
      <p>{type}</p>
    </div>
  );
};
export default Pokemoncard;
