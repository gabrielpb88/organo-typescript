import { useState } from 'react';
import Button from '../Button';
import TextField from '../TextField';
import Select from '../Select';
import './Form.css';
import { ICollaborator } from '../../shared/interfaces/ICollaborator';

interface FormProps {
  onCollaboratorCreated: (collaborator: ICollaborator) => void;
  teams: string[];
}

const Form = ({ onCollaboratorCreated, teams }: FormProps) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');
  const [date, setDate] = useState('');

  const onSave = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    onCollaboratorCreated({
      name: name,
      role: name,
      image: image,
      team: team,
      date: date,
    });
    setName('');
    setName('');
    setImage('');
    setTeam('');
    setDate('');
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          updateValue={(valor) => setName(valor)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={role}
          updateValue={(value) => setRole(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          updateValue={(event) => setImage(event)}
        />
        <TextField
          label="Data de entrada no time"
          placeholder=""
          value={date}
          updateValue={(value) => setDate(value)}
          type="date"
        />
        <Select required={true} label="Time" itens={teams} value={team} onChange={(valor) => setTeam(valor)} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
