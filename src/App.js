import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import './App.css';
import Calcul from './calc/CalculCalc';
import Compteur from './compteur/Compteur';
import Panier from './panier/Panier';
import PagePerso from './page-perso/PagePerso';
import Search2 from './search2/Search2';
import ToDoList from './todolist/ToDoList';
import Accueil from './accueil/Accueil';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/search2" component={Search2} />
          <Route path="/compteur" component={Compteur} />
          <Route path="/panier" component={Panier} />
          <Route path="/page-perso" component={PagePerso} />
          <Route path="/calcul" component={Calcul} />
          <Route path="/todolist" component={ToDoList} />
        </Switch>
      </div>
    );
  }
}

export default App;
