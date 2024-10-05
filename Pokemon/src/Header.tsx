const Header = () => {
  return (
    <div>
      <h1>Logo</h1>
      <form action="">
        <input
          className="border p-3 w-full rounded-lg my-5"
          type="search"
          name="serch"
          id="search"
          placeholder="Search Pokemon here"
        />
      </form>
    </div>
  );
};

export default Header;
