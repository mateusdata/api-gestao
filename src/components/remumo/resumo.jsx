import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import Topo from "../topo/topo";

import "./estilo.css";

const Resumo = () => {
  const [array, setArray] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("https://api-data-lac.vercel.app/api-gestao/resumo")
      .then((resposta) => resposta.json())
      .then((data) => {
        setArray(data);
        console.log(data);
      });

    setTimeout(() => {
      if (loader) {
        setLoader(false);
      }
    }, 1000);
  }, [loader]);
  if (array.length === 0) {
    return;
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
                    {array.resumo.consultas.consultas_30dias_anteriores}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mt-2 text-center">
                  <div className="card-header">Próximos 30 dias</div>
                  <div className="card-body">
                    {array.resumo.consultas.consultas_30dias_posteriores}
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
                    {array.resumo.faturamento.anterior.valor.toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )}
                    <span
                      className={
                        "badge ml-1 " +
                        (array.resumo.faturamento.anterior.comparativo > 0
                          ? "badge-success"
                          : "badge-danger")
                      }
                    >
                      +{array.resumo.faturamento.anterior.comparativo}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mt-2 text-center">
                  <div className="card-header">Próximos 30 dias</div>
                  <div className="card-body">
                    {array.resumo.faturamento.previsao.valor.toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )}
                    <span
                      className={
                        "badge ml-s1 " +
                        (array.resumo.faturamento.previsao.comparativo > 0
                          ? "badge-success"
                          : "badge-danger")
                      }
                    >
                      {array.resumo.faturamento.previsao.comparativo} %
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
