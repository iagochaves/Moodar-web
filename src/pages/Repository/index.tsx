import React, { useState, useEffect, useCallback } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';
import * as data from '../../data/data.json';
import logo from '../../assets/moodar.png';
import { Header, RepositoryInfo } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  title: string;
  description: string;
  avatarUrl: string;
  category: string;
  length: string;
  maxPeople: number;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | undefined>(
    undefined,
  );
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    const repositories = data.array;
    const found = repositories.find(repo => {
      return repo.title === params.repository;
    });
    setRepository(found);
  }, [params.repository]);

  const handleAddtoMyServices = useCallback(() => {
    const storagedRepositories = localStorage.getItem(
      '@MoodarWeb:repositories',
    );
    if (storagedRepositories) {
      const parsedstoragedRepositories = JSON.parse(storagedRepositories);
      parsedstoragedRepositories.push(repository);
      localStorage.setItem(
        '@MoodarWeb:repositories',
        JSON.stringify(parsedstoragedRepositories),
      );
      // eslint-disable-next-line no-alert
      alert('Adicionado em seus serviços');
    }
  }, [repository]);
  return (
    <>
      <Header>
        <img src={logo} alt="Moodar logo" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.avatarUrl} alt={repository.title} />
            <div>
              <strong>{repository.title}</strong>
              <p>{repository.description}</p>
            </div>
            <Link to="/" onClick={handleAddtoMyServices}>
              Adicionar
            </Link>
          </header>
          <ul>
            <li>
              <strong>{repository.category}</strong>
              <span>Categoria</span>
            </li>
            <li>
              <strong>{repository.length}</strong>
              <span>Duração</span>
            </li>
            <li>
              <strong>{repository.maxPeople}</strong>
              <span>Máximo inscritos</span>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            congue sem id eros eleifend faucibus. Pellentesque vulputate a nisl
            id aliquam. Proin tristique malesuada nisl in eleifend. Donec
            dignissim risus velit, at commodo urna volutpat a. Donec sit amet
            ultrices neque, in tincidunt ante. Nunc laoreet cursus maximus.
            Etiam id rutrum mi, ut finibus sem. In hac habitasse platea
            dictumst. Etiam eros purus, hendrerit sit amet neque imperdiet,
            sollicitudin faucibus mi. Mauris ullamcorper ante nec egestas
            molestie.
          </p>
          <p>
            Pellentesque accumsan sit amet turpis egestas consectetur. Duis eu
            pretium neque. Aliquam risus erat, ullamcorper eu molestie nec,
            tristique a felis. Nulla egestas diam id ex aliquet ullamcorper.
            Vivamus eget urna quam. Nulla at nibh justo. Etiam interdum egestas
            molestie. Duis eu quam vitae lorem malesuada ullamcorper. Etiam
            ligula urna, dictum id augue et, molestie imperdiet dolor. Cras
            cursus dolor id libero finibus, vel scelerisque nulla pretium. Nam
            dapibus eleifend ex sit amet posuere. Sed congue erat at tempor
            gravida. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In in imperdiet lacus.
            Suspendisse aliquam arcu vitae lorem consequat, ac posuere est
            gravida.
          </p>
          <p>
            Curabitur blandit dolor sit amet maximus aliquam. In hac habitasse
            platea dictumst. Praesent in nulla ut purus ultricies varius. Nullam
            egestas purus eget viverra rutrum. Vivamus at nibh quis nibh
            convallis varius at in erat. Pellentesque eget lectus sit amet eros
            volutpat ullamcorper vel eget metus. Quisque finibus, elit faucibus
            sodales tincidunt, neque nisl luctus nunc, in porttitor enim dui ac
            justo. Aenean venenatis orci eu lectus blandit fermentum. Quisque ut
            erat vel tortor elementum cursus.
          </p>
        </RepositoryInfo>
      )}
    </>
  );
};

export default Repository;
