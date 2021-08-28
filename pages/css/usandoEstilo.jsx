import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
  return (
    <div>
      <Estilo numero={3} color="#000" />
      <Estilo numero={-13} color="#fff" centro />
      {/* <Estilo nota={8} />
      <Estilo nota={4} /> */}
    </div>
  );
}
