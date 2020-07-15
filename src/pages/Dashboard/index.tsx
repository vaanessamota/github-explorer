import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  // nao precisa colocar a tipagem de tudo que o repo possui
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

/**
 * hasError={}
 * !inputError se for vazio é falsy o ! converte pra true
 * !!inputError se for vazio é falsy !! converte duas vezes
 *
 */

// React.FC - Function Component ou seja componente no formato de função
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState(''); // armazenar o valor do input
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
      // desconverte de JSON para array
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
      // converte para JSON pois localStorage nao armazena array
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    // Adição de um novo repositório
    // Consumir API do Github
    // Salvar o novo repositorio
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');

      setInputError('');
    } catch (err) {
      setInputError('Repositório não encontrado!');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title> Explore repositórios no Github </Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      {/* Error só irá ser mostrado caso a variavel
          inputError esteja preenchida
       */}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
