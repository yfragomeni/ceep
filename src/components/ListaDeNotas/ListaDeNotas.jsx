import React from 'react';
import CardNota from '../CardNota';
import "./estilo.css";

class ListaDeNotas  extends React.Component {
render() {
    return(
        <ul className="lista-notas">
            {
                this.props.notas.map(( nota, index) => {
                        return(<li 
                        key={index}
                        className="lista-notas_item">
                            <CardNota 
                            indice={index}
                            apagarNota={this.props.apagarNota}
                            titulo={nota.titulo}
                            texto = {nota.texto}/>
                            </li>);
                    }
                )
            }
      </ul>
    );
}
}
// Key é usado para saber qual elemento do array que é.

export default ListaDeNotas;
