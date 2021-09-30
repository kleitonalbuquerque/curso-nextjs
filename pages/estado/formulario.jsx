import { useState } from "react";

export default function formulario() {
  // Componente controlado
  const [valor, setValor] = useState("inicial"); // Componente não controlado useState(undefined)
  console.log(valor);

  function alterarInput() {
    setValor(valor + "!");
  }

  function limpaInput() {
    setValor("");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>{valor}</span>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={alterarInput}>Alterar</button>
      <button onClick={limpaInput}>Limpar</button>
    </div>
  );
}
