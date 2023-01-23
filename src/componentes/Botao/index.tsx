import './Botao.css';
import { ReactElement } from 'react';

interface BotaoProps {
  children: ReactElement | string;
}
const Botao = ({ children }: BotaoProps) => {
  return <button className="botao">{children}</button>;
};

export default Botao;
