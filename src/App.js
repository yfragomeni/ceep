import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaDeCategorias from './components/ListaDeCategorias';
import Categorias from './dados/Categorias'
import ArrayDeNotas from './dados/Notas'
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        categorias={this.categorias.categorias}
        criarNota={this.notas.criarNota}/>
        <main className="conteudo-principal">
        <ListaDeCategorias
        criarCategoria={this.categorias.criarCategoria}
        categorias={this.categorias.categorias}/>
        <ListaDeNotas 
        apagarNota={this.notas.deletarNota}
        notas={this.notas.notas}/>
        </main>
      </section>
    );
  }
}

//.jsx -> extensão do JavaScript 
// form e ul são "irmaos", devem ser encapsulados em um elemento pai

export default App;
