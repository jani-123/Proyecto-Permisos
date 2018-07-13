import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Login from "./components/Login/login.js";
import FirstViewEmploye from "./components/Employe/employe.js";
/*import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";
import Board from "./components/Board/Board.js";
import Detail from "./components/DetailBoard/DetailBoard.js";*/
import { connect } from "redux-zero/react";
import { HashRouter, Switch, Route } from "react-router-dom";

const PermisosApp = ({ successLogin}) => {
  return <HashRouter>
    <Switch>
      <Route exact path="/" render={() => <Login successLogin={successLogin} />} />
      <Route path="/Employe" render={() => <FirstViewEmploye successLogin={successLogin} />} />
    </Switch>
  </HashRouter>;
};
const mapToProps = ({ successLogin}) => ({ successLogin});
export default connect(mapToProps)(PermisosApp);
