import './Collaborator.css';

interface CollaboratorProps {
  name: string;
  image: string;
  role: string;
  backgroundColor: string;
  date: string;
}

const Collaborator = ({ name, image, role, backgroundColor, date }: CollaboratorProps) => {
  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
        <h5>{new Date(date).toLocaleDateString()}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
