import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      notas:[],
      categorias:[]
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

  criarCategoria(nome) {
    let novoArrayCategorias = [...this.state.categorias, nome];
    let novoEstado = { categorias: novoArrayCategorias };
    this.setState(novoEstado);
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
        <main className="conteudo-principal">
        <ListaDeCategorias
        criarCategoria={this.criarCategoria.bind(this)}
        categorias={this.state.categorias}/>
        <ListaDeNotas 
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas}/>
        </main>
      </section>
    );
  }
}

//.jsx -> extensão do JavaScript 
// form e ul são "irmaos", devem ser encapsulados em um elemento pai

export default App;
