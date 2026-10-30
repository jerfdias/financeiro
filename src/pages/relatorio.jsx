import { BarChart, Bar, Cell, XAxis, LabelList } from "recharts";
import { despesas, receitas } from "../data/financeiro";
import '../pages/relatorio.css';

function formatarValor(valor){
    return new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(valor);

}

function Relatorio() {
  return (
    <div className="content-principal">
        <h2 className="titulo-grafico">Receitas</h2>
      <BarChart width={500} height={300} data={receitas} className="Barra-um">
        <XAxis dataKey="nome" />

        <Bar dataKey="valor">
          {receitas.map((item, indice) => (
            <Cell
              key={item.nome}
              fill={item.tipo === "entradas" ? "#16a34a" : "#dc2626"}
            />
            
          ))}
          <LabelList dataKey="valor" position="top" formatter={formatarValor}/>
        </Bar>
      </BarChart>

      <h2 className="titulo-despesas">Despesas</h2>

       <BarChart width={500} height={300} data={despesas} className="Barra-dois">
        <XAxis dataKey="nome" />

        <Bar dataKey="valor">
          {receitas.map((item, indice) => (
            <Cell
              key={item.nome}
              fill={item.tipo === "saidas" ? "#16a34a" : "#dc2626"}
            />
            
          ))}
          <LabelList dataKey="valor" position="top" formatter={formatarValor}/>
        </Bar>
      </BarChart>
    </div>
  );
}

export default Relatorio;