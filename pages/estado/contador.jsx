import { useState } from "react";
import ContadorDisplay from "../../components/ContadorDisplay";

export default function contador() {
  const [numero, setNumero] = useState(0);

  const inc = () => setNumero(numero + 1);
  // const dec = () => setNumero(numero - 1);

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={estilo}>
      <h1>Contador</h1>
      <ContadorDisplay numero={numero} />
      <div>
        <button
          style={{
            borderRadius: "50%",
            backgroundColor: "#0000ff",
            color: "#fff",
            marginRight: "5px",
          }}
          onClick={inc}
        >
          +
        </button>
        <button
          style={{
            borderRadius: "50%",
            backgroundColor: "#ff0000",
            color: "#fff",
            marginRight: "5px",
          }}
          onClick={() => setNumero(numero - 1)}
        >
          -
        </button>
      </div>

      {/* <div>Valor: {numero}</div> */}
    </div>
  );
}
