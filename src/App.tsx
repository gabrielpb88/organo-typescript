import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import { ICollaborator } from './shared/interfaces/ICollaborator';

function App() {
  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ];

  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);

  const onNewCollaboratorCreated = (colaborador: ICollaborator) => {
    setCollaborators([...collaborators, colaborador]);
  };

  return (
    <div className="App">
      <Banner imgSrc="/imagens/banner.png" alternativeText="O banner principal da página do Organo" />
      <Form
        teams={teams.map((time) => time.name)}
        onCollaboratorCreated={(collaborator) => onNewCollaboratorCreated(collaborator)}
      />

      {teams.map((time) => (
        <Team
          key={time.name}
          name={time.name}
          primaryColor={time.primaryColor}
          secundaryColor={time.secondaryColor}
          collaborators={collaborators.filter((collaborator) => collaborator.team === time.name)}
        />
      ))}
    </div>
  );
}

export default App;
