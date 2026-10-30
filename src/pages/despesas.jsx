
import { despesas } from '../data/financeiro.js';
import './despesas.css';

function Despesas() {
  return (
    <div>
      <h1 className="titulo">Despesas</h1>

      {despesas.map((item) => (
        <div className='despesas-content' key={item.id}>
          <p>{item.nome}</p>

          <p className='despesas-Valor'>
            Valor: {item.valor.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Despesas;
