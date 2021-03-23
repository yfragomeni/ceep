import React from 'react';

class FormularioCadastro extends React.Component {
    render() {
        return (
        <form>
            <input type= "text" placeholder="Título"/>
            <textarea placeholder="Escreva sua nota..."></textarea>
            <button>Criar nota</button>
        </form>
        );
    }
 }

 export default FormularioCadastro;