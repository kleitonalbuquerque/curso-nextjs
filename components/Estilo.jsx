export default function Estilo(props) {
  const classeAplicada = props.numero >= 0 ? "azul" : "vermelho";

  return (
    <div>
      <h1
        style={{
          backgroundColor: props.numero >= 0 ? "#2d2" : "#d22",
          color: props.color,
          padding: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: props.centro ? "center" : "flex-start",
        }}
      >
        Texto #01
      </h1>

      <h2 className={classeAplicada}>Texto #02</h2>

      <p style={{ color: props.nota >= 7 ? "blue" : "red" }}>{props.nota}</p>
    </div>
  );
}
