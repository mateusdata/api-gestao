import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const MenuSuperior = () => {
  const [menu, setMenu] = useState(true);
  function alterarMenu() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }
  return (
    <nav id="hospital" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        Gestão de Hospital
      </Link>
      <button
        onClick={alterarMenu}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id={menu ? "navbarNav" : "navbarNav2"}
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Resumo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/consultas" className="nav-link">
              Consultas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faturamento" className="nav-link">
              Faturamento
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;
