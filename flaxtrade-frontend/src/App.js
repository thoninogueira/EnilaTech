import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NegociacoesAtivas from './components/NegociacoesAtivas';
import Historico from './components/Historico';
import PainelControle from './components/PainelControle';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/negociacoes-ativas" component={NegociacoesAtivas} />
        <Route path="/historico" component={Historico} />
        <Route path="/painel-controle" component={PainelControle} />
      </Switch>
    </Router>
  );
}

export default App;
