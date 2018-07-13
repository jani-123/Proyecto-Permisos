import React from "react";
/*import { addLogin } from "../../actions/actions";*/
import "./login.css";
import logo from './img/logo1.png';
import { NavLink, Redirect } from "react-router-dom";

const Login = ({ successLogin }) => {
  return (
    <div id="login">
      <img src={logo} />
      {
        
          <form className="form-horizontal formulario">
            <div className="form-group">
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  ref={e => this.emailInput = e}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  ref={e => this.passwordInput = e}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">

                <NavLink to="/Employe"><button type="submit" className="btn btn-lg btn-sign-in">Iniciar Sesion</button></NavLink>
              </div>
            </div>
          </form>
      }
    </div>
  );
};
export default Login;
