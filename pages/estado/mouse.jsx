import { useState } from "react";

export default function mouse() {
  // Estado nas variáveis x e y
  const [x, setX] = useState(0); // no react usa-se o set

  // Segunda forma
  const arrayY = useState(0);
  let y = arrayY[0];
  const alterarY = arrayY[1];

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
    fontSize: "40px",
  };

  function quandoMover(e) {
    // console.log("Eixo X: ", e.clientX, "Eixo Y: ", e.clientY);
    setX(e.clientX);
    alterarY(e.clientY);
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <div>Eixo X: {x}</div>
      <div>Eixo Y: {y}</div>
    </div>
  );
}
