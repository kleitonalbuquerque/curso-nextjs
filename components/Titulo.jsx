export default function Titulo(props) {
  console.log(props);
  // Passando props para o componente
  return props.pequeno ? (
    <>
      <p>{props.principal}</p>
      <p>{props.descricao}</p>
    </>
  ) : (
    <>
      <h1>{props.principal}</h1>
      <h2>{props.descricao}</h2>
    </>
  );

  // if (props.pequeno) {
  //   return (
  //     <>
  //       <p>{props.principal}</p>
  //       <p>{props.descricao}</p>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1>{props.principal}</h1>
  //       <h2>{props.descricao}</h2>
  //     </>
  //   );
  // }
}
