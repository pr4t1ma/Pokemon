const names = ["James", "John", "Paul", "Ringo", "George"];

const Filterarray = () => {
  return (
    <div>
      <ul>
        {names
          .filter((name) => name.includes("J"))
          .map((fileterName) => (
            <li>{Filterarray.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Filterarray;
