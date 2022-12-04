import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import Topo from "../topo/topo";

import "./estilo.css";

const Resumo = () => {
  const [array, setArray] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("http://www.devup.com.br/php/api-dashboard/api/resumo")
      .then((resposta) => resposta.json())
      .then((data) => {
        setArray(data);
      });
    setTimeout(() => {
      if (loader) {
        setLoader(false);
      }
    }, 2000);
  }, [loader]);
  if (array.length === 0) {
    return 
      
  }
  //console.log(array.consultas.consultas_30dias_posteriores);
  return (
    <>
      {loader ? (
        <div className="load">
          <PropagateLoader color="#36D7B7" />
        </div>
      ) : (
        false
      )}
      <Topo>
        <h2 className="mt-2">Resumo</h2>

        <div className="row">
          <div className="col">
            <h3>Consultas</h3>

            <div className="row">
              <div className="col">
                <div className="card mt-2 text-center">
                  <div className="card-header">30 dias anteriores</div>
                  <div className="card-body">
                    {array.consultas.consultas_30dias_anteriores}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mt-2 text-center">
                  <div className="card-header">Próximos 30 dias</div>
                  <div className="card-body">
                    {array.consultas.consultas_30dias_posteriores}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h3>Faturamento</h3>

            <div className="row">
              <div className="col">
                <div className="card mt-2 text-center">
                  <div className="card-header">30 dias anteriores</div>
                  <div className="card-body">
                    {array.faturamento.anterior.valor.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                    <span
                      className={
                        "badge ml-1 " +
                        (array.faturamento.anterior.comparativo > 0
                          ? "badge-success"
                          : "badge-danger")
                      }
                    >
                      +{array.faturamento.anterior.comparativo}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mt-2 text-center">
                  <div className="card-header">Próximos 30 dias</div>
                  <div className="card-body">
                    {array.faturamento.previsao.valor.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                    <span
                      className={
                        "badge ml-s1 " +
                        (array.faturamento.previsao.comparativo > 0
                          ? "badge-success"
                          : "badge-danger")
                      }
                    >
                      {array.faturamento.previsao.comparativo} %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Topo>
    </>
  );
};

export default Resumo;
