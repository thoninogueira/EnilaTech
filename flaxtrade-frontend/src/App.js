import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import NegociacoesAtivas from './NegociacoesAtivas';
import PainelControle from './PainelControle';
import Negociacao from './Negociacao';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>FlaxTrade</h1>
          {/* Adicione qualquer elemento de navegação ou cabeçalho global aqui */}
        </header>

        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/negociacoes-ativas" component={NegociacoesAtivas} />
            <Route path="/painel-controle" component={PainelControle} />
            <Route path="/negociacao/:id" component={Negociacao} />
            <Route render={() => <p>Página não encontrada</p>} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
