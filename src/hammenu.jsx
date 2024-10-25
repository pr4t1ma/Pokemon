const items = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const Hammenu = () => {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        {items.map((item) => {
          return <li key={item.href}>{(item, label)}</li>;
        })}
      </ul>
    </div>
  );
};
export default Ham;
