import React, { useEffect, useState } from "react";
import Topo from "../topo/topo";

const Consultas = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("https://api-data-lac.vercel.app/api-gestao/consultas")
      .then((resposta) => resposta.json())
      .then((data) => {
        setArray(data);
      });
  }, []);
  if (array.length === 0) {
    return <Topo/>
  }
  return (
    <Topo>
      <h2 className="mt-2">Consultas</h2>

      <div className="row">
        <div className="col">
          <div className="card mt-2">
            <div className="card-header">Realizadas</div>
            <table className="table">
              <thead>
                <tr>
                  <th>Especialidade</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {array.consultas.realizadas.map((item, indice) => {
                  return (
                    <tr key={indice}>
                      <td>{item.especialidade}</td>
                      <td>{item.quantidade}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col">
          <div className="card mt-2">
            <div className="card-header">Marcadas</div>
            <table className="table">
              <thead>
                <tr>
                  <th>Especialidade</th>
                  <th>Quantidade</th>
                </tr>
              </thead>
              <tbody>
                {array.consultas.marcadas.map((item, indice) => {
                  return (
                    <tr key={indice}>
                      <td>{item.especialidade}</td>
                      <td>{item.quantidade}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Topo>
  );
};

export default Consultas;
