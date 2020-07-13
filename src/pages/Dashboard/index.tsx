import React, { useState, useCallback, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { Form, Repositories, Select, Filter, Header, Title } from './styles';
import logo from '../../assets/moodar.png';
import * as data from '../../data/data.json';

interface Repository {
  title: string;
  description: string;
  avatarUrl: string;
  category: string;
  length: string;
  maxPeople: number;
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    try {
      return data.array;
    } catch {
      return [];
    }
  });
  const [newFilter, setnewFilter] = useState('');
  const [repositoriesFiltered, setrepositoriesFiltered] = useState<
    Repository[]
  >([]);
  const [InputError, setInputError] = useState('');

  useEffect(() => {
    const storagedRepositories = localStorage.getItem(
      '@MoodarWeb:repositories',
    );
    if (!storagedRepositories) {
      localStorage.setItem('@MoodarWeb:repositories', JSON.stringify([]));
    }
  });

  const handleFilterRepository = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      if (!newFilter) {
        setInputError('Digite o nome do serviço para busca');
        setrepositoriesFiltered([]);
        return;
      }
      setnewFilter('');
      setInputError('');
      if (repositoriesFiltered.length === 0) {
        setrepositoriesFiltered(
          repositories.filter(repo => {
            return repo.title.toLowerCase().includes(newFilter.toLowerCase());
          }),
        );
      } else {
        setrepositoriesFiltered(
          repositoriesFiltered.filter(repo => {
            return repo.title.toLowerCase().includes(newFilter.toLowerCase());
          }),
        );
      }
    },
    [newFilter, repositories, repositoriesFiltered],
  );
  const selectOnChange = useCallback(
    option => {
      if (option !== 'na') {
        setrepositoriesFiltered(
          repositories.filter(repo => {
            return repo.category === option;
          }),
        );
      } else {
        setrepositoriesFiltered([]);
      }
    },
    [repositories],
  );

  return (
    <>
      <Header>
        <img src={logo} alt="Moodar logo" />
        <Link to="/myservices">Meus Serviços</Link>
      </Header>
      <Title>Bem-vindo(a), escolha um de nossos serviços.</Title>
      <Form hasError={Boolean(InputError)} onSubmit={handleFilterRepository}>
        <input
          placeholder="Digite o nome da ação para busca"
          value={newFilter}
          onChange={e => setnewFilter(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Filter>Filtrar por</Filter>
      <Select
        defaultValue="na"
        name="categories"
        onChange={option => selectOnChange(option.target.value)}
      >
        <option value="na">Nenhuma categoria</option>
        <option value="Webinars Online">Webinars Online</option>
        <option value="Palestras presenciais">Palestras Online</option>
        <option value="Treinamentos">Treinamentos</option>
      </Select>
      {repositoriesFiltered && (
        <Repositories>
          {repositoriesFiltered.map(repo => {
            return (
              <Link key={repo.title} to={`/repositories/${repo.title}`}>
                <img src={repo.avatarUrl} alt={repo.description} />
                <div>
                  <strong>{repo.title}</strong>
                  <span>{repo.category}</span>
                  <p>{repo.description}</p>
                </div>
                <FiChevronRight size={20} />
              </Link>
            );
          })}
        </Repositories>
      )}
      {repositoriesFiltered.length === 0 && (
        <Repositories>
          {repositories.map(repo => {
            return (
              <Link key={repo.title} to={`/repositories/${repo.title}`}>
                <img src={repo.avatarUrl} alt={repo.description} />
                <div>
                  <strong>{repo.title}</strong>
                  <span>{repo.category}</span>
                  <p>{repo.description}</p>
                </div>

                <FiChevronRight size={20} />
              </Link>
            );
          })}
        </Repositories>
      )}
    </>
  );
};

export default Dashboard;
