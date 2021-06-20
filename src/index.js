import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Header from "./components/Header";
import Cabinet from "./components/Lk/Cabinet";
import Cart from "./components/Cart/Cart";
import Admin from "./components/Lk/Admin";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Header/>
          <Switch>
              <Route path="/auth/login" component={Login} />
              <Route path="/auth/reg" component={Register} />
              <Route path="/lk" component={Cabinet} />
              <Route path="/cart" component={Cart} />
              <Route path="admin" component={Admin} />
              <Route exact path="/" component={Home} />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
