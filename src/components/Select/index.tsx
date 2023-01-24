import './Select.css';

interface SelectProps {
  label: string;
  onChange: (evento: string) => void;
  required?: boolean;
  value: string;
  itens: string[];
}

const Select = ({ label, onChange, value, itens, required = false }: SelectProps) => {
  return (
    <div className="select">
      <label>{label}</label>
      <select onChange={(event) => onChange(event.target.value)} required={required} value={value}>
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
