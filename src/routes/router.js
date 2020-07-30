import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/index';
import CadastroVideo from '../pages/cadastros/videos/index';
import CadastroCategoria from '../pages/cadastros/categoria/index';

function Error() {
  return (
    <div>
      Pagina nao encontrada
    </div>
  );
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} exact />
        <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
