import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
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
                            to="/marvel"
                        >
                            Vegetales
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/dc"
                        >
                            Frutos
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/dc"
                        >
                            Semillas
                        </NavLink>

                        <NavLink
                            className={({isActive}) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                            to="/search"
                        >
                            Buscar
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-primary">
                        User
                    </span>

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