import "./NavBar.css"
const NavBar = ()=> {
  return(
    <nav className ="NavBar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Carrito</a></li>
        </ul>
      </nav>
  );
};

export default NavBar;