
import './menus.css';

function Menus() {
  const receitas = [
    { nome: 'INSS', valor: 3000, tipo: 'Salário' },
    { nome: 'Salário Volkswagen', valor: 5400, tipo: 'Salário' },
  ];

  const despesas = [
    { nome: 'Cartão de crédito', valor: 3400, tipo: 'Conta', pago: true },
    { nome: 'Financiamento do carro', valor: 998, tipo: 'Conta', pago: true },
  ];

  const formatarMoeda = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  return (
    <div className="painel-financeiro">
      <section className="grupo-financeiro">
        <h2 className="titulo-receitas">Minhas Entradas</h2>

        {receitas.map((item) => (
          <div className="cartao-financeiro receita" key={item.nome}>
            <div className="informacoes">
              <h3>{item.nome}</h3>
              <span>{item.tipo}</span>
            </div>

            <strong>{formatarMoeda(item.valor)}</strong>
          </div>
        ))}
      </section>

      <section className="grupo-financeiro">
        <h2 className="titulo-despesas">Minhas Despesas</h2>

        {despesas.map((item) => (
          <div className="cartao-financeiro despesa" key={item.nome}>
            <div className="informacoes">
              <h3>{item.nome}</h3>
              <span>{item.tipo} · {item.pago ? 'Pago' : 'Pendente'}</span>
            </div>

            <strong>{formatarMoeda(item.valor)}</strong>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Menus;
