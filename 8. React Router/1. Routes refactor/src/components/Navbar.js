export const Navbar = ({ setPage = () => null }) => {
  return (
    <div className="navbar">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
        alt="logo"
      />
      <nav>
        <span>Home</span>
        <span>List</span>
        <span>Contact</span>
      </nav>
    </div>
  );
};
