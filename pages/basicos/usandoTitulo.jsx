import Titulo from "../../components/Titulo";

export default function usuandoTitulo(info) {
  return (
    <div>
      <Titulo
        principal="Página de Cadastro"
        descricao="Inlcuir, alterar e excluir coisas!"
      />

      <Titulo
        principal="Página de Login"
        descricao="Informe seu e-mail e senha"
        pequeno={true}
      />

      <Titulo
        principal="Página de Login"
        descricao="Informe seu e-mail e senha"
        pequeno
      />
    </div>
  );
}
