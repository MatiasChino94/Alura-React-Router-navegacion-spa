import image from "../assets/img/doguito.svg";
import "../assets/css/componentes/header.css";

//para arreglar el tema de la carga de las paginas 
//usamos react-router-dom LINK  e intercambiamos por las etiquetas <a> para solucionar el problema
//Y cambiar "href" por la prop "to"
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header container">
        <div className="menu-hamburguer">
            <span className="menu-hamburguer__icon"></span>
        </div>
        <div className="header-container">
            <Link to="/" className="flex flex--center">
                <img className="header__logo" src={image} alt="doguito"/>
                <h1 className="header__title">Petshop</h1>
            </Link>
        </div>
        <nav className="menu-header">
            <ul className="menu-items">
                <li><Link className="menu-item menu-item--entrar" to="#">Entrar</Link></li>
                <li><Link className="menu-item" to="#">Productos</Link></li>
                <li><Link className="menu-item" to="/">Blog</Link></li>
                <li><Link className="menu-item" to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
        <div className="menu-header-background"></div>
    </header>
  )
}
