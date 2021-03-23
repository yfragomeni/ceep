import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro.jsx';
import ListaDeNotas from './components/ListaDeNotas.jsx'

class App extends Component {

  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

//.jsx -> extensão do JavaScript 
// form e ul são "irmaos", devem ser encapsulados em um elemento pai

export default App;
