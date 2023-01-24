import './TextField.css';

interface TextFieldProps {
  updateValue: (valor: string) => void;
  placeholder: string;
  label: string;
  value: string;
  required?: boolean;
  type?: 'text' | 'number' | 'date';
}

const TextField = ({ updateValue, placeholder, label, value, required, type = 'text' }: TextFieldProps) => {
  const customPlaceholder = `${placeholder}...`;

  const onTypeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{label}</label>
      <input value={value} onChange={onTypeInput} required={required} placeholder={customPlaceholder} type={type} />
    </div>
  );
};

export default TextField;
