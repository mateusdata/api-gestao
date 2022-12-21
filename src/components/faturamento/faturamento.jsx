import React, { useEffect, useState } from 'react';
import Topo from '../topo/topo';

const Faturamento = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
      fetch("https://api-data-lac.vercel.app/api-gestao/faturamento")
        .then((resposta) => resposta.json())
        .then((data) => {
          setArray(data);
          //console.log(data);
        });
    }, []);
    if (array.length === 0) {
      return <Topo/>
    }

    return(
        <Topo>
            <h2 className="mt-2">Faturamento</h2>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Total por forma de pagamento
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th className="text-right">Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    array.faturamento.detalhamento.map((item,indice) => {
                                        return (
                                            <tr key={indice}>
                                                <td>{item.descricao}</td>
                                                <td className="text-right">
                                                    { item.valor.toLocaleString("pt-BR", { style : "currency", currency : "BRL"}) }
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>      
                    </div>
                </div>
            </div>
        </Topo>
    )
}

export default Faturamento;
