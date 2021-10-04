export function Comp1() {
  return (
    <div>
      <h2>Componente #1</h2>
    </div>
  );
}

export const Comp2 = function () {
  return <h2>Componente #2</h2>;
};

export default function Comp3() {
  return (
    <div>
      <h2>Componente #3</h2>
    </div>
  );
}

export const Comp4 = () => {
  return <h2>Componente #4</h2>;
};

const Comp5 = () => <h2>Componente #5</h2>;

const Comp6 = (props) => (
  <div>
    <h2>Componente #6 - {props.msg}</h2>
  </div>
);

export { Comp5, Comp6 };
