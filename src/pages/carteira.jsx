
import { despesas, receitas } from '../data/financeiro';
import '../pages/carteira.css';








function carteira() {
    


const totaldespesa=despesas.reduce((total,item)=>{
    return total+ item.valor;
},0);
const totalReceita=receitas.reduce((total,item)=>{
    return total+item.valor;
},0);

const totaliquido=totalReceita-totaldespesa;


return(
    <div className='principal'>
        <h2 className='titulo'>Total de despeasa em sua carteira</h2>
        <p className='red'>R$: {totaldespesa}</p>
        <h2>Total de receitas em sua carteira</h2>
        <p>{totalReceita}</p>
        <h2>Total liquido</h2>
        <p>R$: {totaliquido}</p>
        </div>
  );

}
export default carteira