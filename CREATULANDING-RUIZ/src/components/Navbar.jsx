import '../App.css'
import CartWidget from './CartWidget';
const Navbar = () => {
    return (
        <nav className="navbar">
            
            
            <div className='links-container'>
                 <ul className="navbar-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            </div>

                <a className='navbar-logo' href="#"><CartWidget /></a>
           
        </nav>
    );
};

export default Navbar;