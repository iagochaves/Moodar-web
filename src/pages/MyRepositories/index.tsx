import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsLeft, FiTrash2 } from 'react-icons/fi';
import { Header, Title, CardsContainer, NoCards } from './styles';
import logo from '../../assets/moodar.png';

interface Repositories {
  title: string;
  description: string;
  avatarUrl: string;
  category: string;
  length: string;
  maxPeople: number;
}

const MyRepositories: React.FC = () => {
  const [repositories, setRepositories] = useState<Repositories[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@MoodarWeb:repositories',
    );
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });
  const handleDeleteButton = useCallback(
    title => {
      const newRepositories = repositories.filter(repo => {
        return repo.title !== title;
      });
      setRepositories(newRepositories); // VAI FAZER AUTO REFRESH DA APLICAÇÃO
      localStorage.setItem(
        '@MoodarWeb:repositories',
        JSON.stringify(newRepositories),
      );
    },
    [repositories],
  );
  return (
    <>
      <Header>
        <img src={logo} alt="moodar logo" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>
      <Title>Meus Serviços</Title>
      {repositories.length === 0 && (
        <NoCards>
          <h1>Você não tem nenhum serviço adicionado na conta ainda!</h1>
        </NoCards>
      )}
      {repositories.length !== 0 && (
        <CardsContainer>
          {repositories.map(repo => (
            <li key={repo.title}>
              <strong>Título</strong>
              <p>{repo.title}</p>

              <strong>Descrição</strong>
              <p>{repo.description}</p>

              <strong>Duração</strong>
              <p>{repo.length}</p>

              <button
                type="button"
                onClick={() => handleDeleteButton(repo.title)}
              >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </CardsContainer>
      )}
    </>
  );
};

export default MyRepositories;
