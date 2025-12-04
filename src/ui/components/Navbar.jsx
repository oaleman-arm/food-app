import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar p-2">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    FoodApp
                </Link>

                <div className="collapse navbar-collapse">
                    <div className="navbar-nav me-auto">

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/vegetales"
                        >
                            Vegetales
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/frutos"
                        >
                            Frutos
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/semillas"
                        >
                            Semillas
                        </NavLink>


                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Buscar producto..."
                            onChange={(e) => { console.log(e.target.value); }}
                        />

                        {/*agregar icono de carrito de compras*/}
                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/cart"
                        >
                            <i className="fas fa-shopping-cart"></i>
                        </NavLink>

                        <button
                            className="nav-item nav-link btn"
                            onClick={onLogout}
                        >
                            Salir
                        </button>

                    </ul>
                </div>
            </div>
        </nav>
)
}