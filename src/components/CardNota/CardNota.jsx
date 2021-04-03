import React, { Component } from 'react';
import "./estilo.css";
import  DeleteSVG  from '../../assets/img/delete.svg'

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

    render() { 
        return ( 
            <section className="card-nota">
            <header className="card-nota_cabecalho">
              <h3 className="card-nota_titulo">{this.props.titulo}</h3>
              <p className="card-nota_texto">{this.props.texto}</p>
              <h4>{this.props.categoria}</h4>
              <img 
              src={DeleteSVG}
              alt="Delete"
              onClick={this.apagar.bind(this)}/>
            </header>
          </section>
         );
    }
}
 
export default CardNota;
// Classname é usado pra nao confundir a propriedade DOM do JS.