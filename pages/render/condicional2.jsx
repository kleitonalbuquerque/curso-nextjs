import If from "../../components/If";

export default function condicional2() {
  const numero = 4;
  return (
    <div>
      <If test={numero % 2 === 0}>
        <h1>O número {numero} é par</h1>
      </If>

      <If test={numero % 2 != 0}>
        <h1>O número {numero} é ímpar</h1>
      </If>
    </div>
  );
}
