import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h1>Família {props.familia}</h1>
      <Filho nome="Kleiton" familia={props.familia} />
      <Filho nome="Liliane" familia={props.familia} />
      <Filho {...props} nome="Mariana" />
    </div>
  );
}
