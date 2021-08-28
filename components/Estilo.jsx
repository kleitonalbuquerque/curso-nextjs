export default function Estilo(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: props.numero >= 0 ? "#2d2" : "#d22" }}>
        Texto
      </h1>

      <p style={{ color: props.nota >= 7 ? "blue" : "red" }}>{props.nota}</p>
    </div>
  );
}
