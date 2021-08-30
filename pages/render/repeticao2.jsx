import listaProdutos from "../../data/listaProdutos";

export default function repeticao2() {
  function renderizarLinhas() {
    console.log("Lista de Produtos", listaProdutos);

    const comBorda = {
      border: "1px solid black",
    };

    return listaProdutos.map((produto) => {
      return (
        <tr key={produto.id}>
          <td style={comBorda}>{produto.id}</td>
          <td style={comBorda}>{produto.nome}</td>
          <td style={comBorda}>{produto.preco}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table style={{ border: "1px solid #000" }}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{renderizarLinhas()}</tbody>
      </table>
    </div>
  );
}
