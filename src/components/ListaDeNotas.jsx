import React from 'react';
import CardNota from './CardNota';

class ListaDeNotas  extends React.Component {
render() {
    return(
        <ul>
            {
                Array.of("Trabalho", "Trabalho", "Estudos").map(
                    categoria => {
                        return(<li>
                            <span>{categoria}</span>
                            <CardNota/>
                            </li>);
                    }
                )
            }
      </ul>
    );
}
}

export default ListaDeNotas;
