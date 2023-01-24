import Collaborator from '../Collaborator';
import './Team.css';
import { ICollaborator } from '../../shared/interfaces/ICollaborator';

interface TeamProps {
  primaryColor: string;
  secundaryColor: string;
  name: string;
  collaborators: ICollaborator[];
}

const Team = ({ primaryColor, secundaryColor, name, collaborators }: TeamProps) => {
  const css = { backgroundColor: secundaryColor };

  return collaborators.length > 0 ? (
    <section className="team" style={css}>
      <h3 style={{ borderColor: primaryColor }}>{name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator) => (
          <Collaborator backgroundColor={primaryColor} key={collaborator.name} {...collaborator} />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Team;
