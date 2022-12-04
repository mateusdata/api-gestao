import React, { useEffect, useState } from 'react';
import Topo from '../topo/topo';

const Consultas = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
      fetch("http://www.devup.com.br/php/api-dashboard/api/consultas")
        .then((resposta) => resposta.json())
        .then((data) => {
          setArray(data);
          console.log(data);
        });
    }, []);
    if (array.length === 0) {
        return 
      }
    return (
        <Topo>
            <h2 className="mt-2">Consultas</h2>

            <div className="row">
                <div className="col">
                    <div className="card mt-2">
                        <div className="card-header">
                            Realizadas
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Especialidade</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    array.realizadas.map((item, indice) => {
                                        return (
                                            <tr key={indice}>
                                                <td>{item.especialidade}</td>
                                                <td>{item.quantidade}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col">
                    <div className="card mt-2">
                        <div className="card-header">
                            Marcadas
                        </div>
                        <table className="table">
                        <thead>
                            <tr>
                                <th>Especialidade</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                array.marcadas.map((item, indice) => {
                                    return (
                                        <tr key={indice}>
                                            <td>{item.especialidade}</td>
                                            <td>{item.quantidade}</td>
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

export default Consultas;
