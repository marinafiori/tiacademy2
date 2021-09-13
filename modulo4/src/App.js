import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import { Menu } from './components/Menu';
import { VisualizarServico } from './pages/Servico/VisulaizarServico';
import { Servico } from './pages/Servico/Servico';
import { Cadastrar } from './pages/Servico/CadastrarServico';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { Cliente } from './pages/Cliente/Cliente';
import { Pedido } from './pages/Pedido/Pedido';
import { CadastrarCliente, Cadastrarcliente } from './pages/Cliente/CadastrarCliente';
import { Cadastrarpedido } from './pages/Pedido/CadastrarPedido';
import { Editar } from './pages/Servico/EditarServico';
import { EditarPedido } from './pages/Pedido/EditarPedido';
import { EditarCliente } from './pages/Cliente/EditarCliente';

function App() {
  return (
    <div>
      <Menu/>
     <Router>
       <Switch>
         <Route exact path= "/" component={Home}/>
         <Route path= "/visualizarcliente" component={VisualizarCliente}/>
         <Route path= "/visualizarpedido" component={VisualizarPedido}/>
         <Route path= "/visualizarservico" component={VisualizarServico}/>
         <Route path= "/cliente/:id" component={Cliente}/>
         <Route path= "/pedido/:id" component={Pedido}/>
         <Route path= "/servico/:id" component={Servico}/>
         <Route path= "/cadastrarcliente" component={CadastrarCliente}/>
         <Route path= "/cadastrarpedido" component={Cadastrarpedido}/>
         <Route path= "/cadastrarservico" component={Cadastrar}/>
         <Route path= "/editarservico/:id" component={Editar}/>
         <Route path= "/editarpedido/:id" component={EditarPedido}/>
         <Route path= "/editarcliente/:id" component={EditarCliente}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
