import {
  LayoutDashboard,
  Wallet,
  TrendingUp,
  TrendingDown,
  ChartNoAxesCombined,
  Settings,
  
  
} from 'lucide-react';



import {Link, Navigate, Routes,Route} from "react-router-dom";
import "./App.css";
import Dashboard from './pages/dashboard';
import Receitas from './pages/receitas';
import Carteira from './pages/carteira';
import Despesas from './pages/despesas';
import Relatorio from './pages/relatorio';


function App() {
const menu=[
  {
    nome:"dashboard",
    caminho:"/dashboard",
    icone:LayoutDashboard,
  },
  {
    nome:"receitas",
    caminho:"/receitas",
    icone:TrendingUp 
   },
   {
    nome:"despesas",
    caminho:"/despesas",
    icone:TrendingDown,
   },
   {
    nome:"carteira",
    caminho:"/carteira",
    icone:Wallet,    
   },
   {
     nome:"relatorio",
     caminho:"/relatorio",
     icone:ChartNoAxesCombined,
   },
   {
      nome:"configuração",
      caminho:"/config",
      icone:Settings,
   },


]

  return (
    <div className='layout'>
  <aside className='menuLateral'>
   <h2 className='texto'>Sistema Financeiro</h2>
   <nav>
  {menu.map((item)=>{
    const Icone=item.icone;

    return(
      <Link
       key={item.caminho}
       to={item.caminho}
      className="menuItem"
     >
      <Icone size={20}/>
      <span>{item.nome}</span>
      </Link>
    )
  })}

   </nav>
  </aside>
  <main className='conteudo'>

    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/receitas" element={<Receitas />}/>
      <Route path="/carteira" element={<Carteira />}/>
      <Route path="/despesas" element={<Despesas />}/>
      <Route path="/relatorio" element={<Relatorio />}/>
  
    
    
    </Routes>

  </main>
  </div>


  )
}

export default App