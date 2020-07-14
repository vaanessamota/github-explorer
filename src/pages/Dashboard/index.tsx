import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// React.FC - Function Component ou seja componente no formato de função
const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title> Explore repositórios no Github </Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/20022113?s=460&u=ea41184216418022759d7f96dac2bec7b6cc6822&v=4"
          alt="Vanessa Oliveira"
        />
        <div>
          <strong>gobarber-server</strong>
          <p> Projeto feito durante o GoStack </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/20022113?s=460&u=ea41184216418022759d7f96dac2bec7b6cc6822&v=4"
          alt="Vanessa Oliveira"
        />
        <div>
          <strong>gobarber-server</strong>
          <p> Projeto feito durante o GoStack </p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/20022113?s=460&u=ea41184216418022759d7f96dac2bec7b6cc6822&v=4"
          alt="Vanessa Oliveira"
        />
        <div>
          <strong>gobarber-server</strong>
          <p> Projeto feito durante o GoStack </p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
