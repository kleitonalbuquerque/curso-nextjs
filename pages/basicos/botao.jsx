function acao1() {
  console.log("acao1");
}

export default function botao() {
  function acao2() {
    console.log("acao2");
  }

  function acao5(e) {
    console.log(e.target.value);
    const MARI = e.target.value;

    if (MARI === "bla") {
      console.log("Mari é muito sapeca!");
    } else {
      console.log("Mari é muito tranquila.");
    }
  }

  function acao6(e) {
    const url = "https://google.com";

    if (e.target.value === "UVA") {
      console.log(url);
    } else {
      console.log("Muito bom aprender lógica de programação");
    }
  }

  return (
    <div>
      <button onClick={acao1}>Click #01</button>
      <button onClick={acao2}>Click #02</button>
      <button
        onClick={function () {
          console.log("acao3");
        }}
      >
        Click #03
      </button>
      <button onClick={() => console.log("acao4")}>Click #04</button>
      <button onClick={acao5} value="bla">
        Click #05
      </button>
      <button onClick={acao5} value="banana">
        Click #05 v2
      </button>

      <select onClick={acao6} name="" id="" defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Escolha uma fruta...
        </option>
        <option>UVA</option>
        <option>MANGA</option>
      </select>

      <div>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </div>
    </div>
  );
}
