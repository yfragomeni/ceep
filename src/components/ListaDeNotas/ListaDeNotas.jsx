import React from 'react';
import CardNota from '../CardNota';
import "./estilo.css";

class ListaDeNotas  extends React.Component {
render() {
    return(
        <ul className="lista-notas">
            {
                Array.of("Trabalho", "Trabalho", "Estudos").map( index => {
                        return(<li 
                        key={index}
                        className="lista-notas_item">
                            <CardNota/>
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
