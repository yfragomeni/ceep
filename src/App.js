import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas'
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let notas = this.state.notas;
    notas.splice(index, 1);
    this.setState({notas: notas});
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas 
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas}/>
      </section>
    );
  }
}

//.jsx -> extensão do JavaScript 
// form e ul são "irmaos", devem ser encapsulados em um elemento pai

export default App;
