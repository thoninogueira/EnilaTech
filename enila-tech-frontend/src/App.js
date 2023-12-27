// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';  // Importe seu componente de login
import Dashboard from './Dashboard';  // Importe seu componente de dashboard
import Home from './components/Home';
import NegociacoesAtivas from './components/NegociacoesAtivas';
import Historico from './components/Historico';
import PainelControle from './components/PainelControle';

const App = () => {
  return (
    <Router>
      <div>
        {/* Adicione navegação e cabeçalho aqui, se necessário */}
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Routepa th="/" exact component={Home} />
          <Route path="/negociacoes-ativas" component={NegociacoesAtivas} />
          <Route path="/historico" component={Historico} />
          <Route path="/painel-controle" component={PainelControle} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
