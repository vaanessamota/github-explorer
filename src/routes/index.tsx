import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

/**
 * exact faz verificação de igualdade assim ele verifica se a rota é igual ao /
 * por padrao ele vai verificar se inclui o / e todas as rotas que incluem /
 * vão direcionar pro mesmo endereço.
 */

/**
 * Sem o Switch o react-dom exibe todas as rotas ao mesmo tempo.
 */

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
    {/* : é o parametro
        + tudo que vier depois da / faz parte da rota
    */}
  </Switch>
);

export default Routes;
