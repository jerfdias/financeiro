
import { receitas } from '../data/financeiro.js';
import '../pages/receitas.css';


function Receitas() {
  return (
    <div className='principal-content'>
      <h1 className='titulo'>Receitas</h1>
      {receitas.map((item)=>(
        (
          <div className='Receita-content' key={item.id}>
          <p>Entradas:{item.nome}</p>
      
          <p className='item-valor'>Valor: {item.valor.toLocaleString('pt-BR',{
            style:'currency',
            currency:'BRL',

          })}</p>


          </div>
        )
      ))}
      </div>
  )
}

export default Receitas