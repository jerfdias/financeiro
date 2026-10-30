
import { receitas, despesas, carteira } from '../data/financeiro';
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  PiggyBank,
} from 'lucide-react';

import './dashboard.css';

function Dashboard() {
  const totalReceitas = receitas.reduce(
    (total, item) => total + item.valor,
    0
  );

  const totalDespesas = despesas.reduce(
    (total, item) => total + item.valor,
    0
  );

  const saldo = totalReceitas - totalDespesas;

  const formatarMoeda = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  const indicadores = [
    {
      titulo: 'Total de receitas',
      valor: totalReceitas,
      icone: TrendingUp,
      classe: 'receitas',
    },
    {
      titulo: 'Total de despesas',
      valor: totalDespesas,
      icone: TrendingDown,
      classe: 'despesas',
    },
    {
      titulo: 'Saldo disponível',
      valor: saldo,
      icone: PiggyBank,
      classe: 'saldo',
    },
    {
      titulo: 'Carteira de investimentos',
      valor: carteira.totalInvestido,
      icone: Wallet,
      classe: 'carteira',
    },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard financeiro</h1>
        <p>Resumo da sua vida financeira</p>
      </header>

      <section className="indicadores">
        {indicadores.map((item) => {
          const Icone = item.icone;

          return (
            <article
              className={`cartao-indicador ${item.classe}`}
              key={item.titulo}
            >
              <div className="indicador-topo">
                <span>{item.titulo}</span>
                <Icone size={24} />
              </div>

              <strong>{formatarMoeda(item.valor)}</strong>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default Dashboard;
