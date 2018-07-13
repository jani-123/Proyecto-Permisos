import React from "react";
import "./employe.css";
import user0 from './img/user.png';
import microdata from './img/logo_microdata.png';
/*import { signOut } from "../../actions/actions";*/
import { NavLink, Redirect } from "react-router-dom";

const FirstViewEmploye = ({ successLogin }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-12">
          {!successLogin && <Redirect to="/" />}
          <input type="checkbox" className="checkbox" id="menu-toogle" />
          <label for="menu-toogle" className="menu-toogle"></label>
          <nav className="nav">
            <center>
              <img src={user0} alt="" />
              <h3>usuario</h3>
              <div className="menu">
                <NavLink to="/RequestEmploye"><button className="botones">Solicitud del Movimiento del Personal</button></NavLink>
                <NavLink to="/HistoryEmploye"><button className="botones"> Historial de incidencias</button></NavLink>
                <button id="close">Cerrar Sesion</button>
              </div>
            </center>
          </nav>
          <div className="microdata col-lg-offset-3 col-lg-6 col-xs-8 col-xs-offset-1">
            <img src={microdata} alt="logo_microdata" width="100%" />
          </div>
        </div>
      </div>
      <div className="triangle"></div>
    </div>

  );
};

export default FirstViewEmploye;
