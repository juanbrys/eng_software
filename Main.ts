import prompt from "prompt-sync";
import Empresa from "./Empresa";
import { Funcionario } from "./Funcionario";
import { NvlA } from "./NvlA";
let funcionario: Funcionario[] = [];
let empresa: Empresa = new Empresa("Super Mercado", "C", 2500, 150, 5, 0);
let teclado = prompt();
let opt: number = 0;

while (opt != 9 || empresa.falido() == true) {
  console.log("\n1. Contratar Funcionário:");
  console.log("2. Demitir Funcionário:");
  console.log("3. Listar Funcionário:");
  console.log("4. Proximo Dia:");
  console.log("5. Status da Empresa:");
  console.log("6. Abastacer o Estoque:");
  console.log("7. Subir o nível da empresa:");
  console.log("9. Fechar empresa!\n");

  opt = +teclado("Escolha uma opção: ");

  switch (opt) {
    case 1:
      console.log("----- Funcionário -----");
      let nome = teclado("Nome do Funcionário ");

      funcionario.push(new NvlA(nome));
      console.log("Funcionário efetivado!");
      break;

    case 2:
      console.log(`Voce tem ${funcionario.length} funcionários`);
      funcionario.pop();
      console.log(`Agora ficaram ${funcionario.length} funcionários`);
      break;

    case 3:
      const vlr = funcionario.map(function (qtd) {
        return qtd.nome;
      });
      console.log(vlr);
      break;

    case 4: // passar o dia
      empresa.passarDia();
      empresa.falido();
      break;

    case 5: // status da empresa
      empresa.status();
      console.log(empresa.status());

      break;

    case 6: // abastecer estoque
      const qtd = +teclado("Quantos produtos você quer ?(valor: 2,00) ");
      empresa.abastecer(qtd);
      break;

    case 7: // aumentar nvl da empresa
      console.log("\n" + "=".repeat(30));
      console.log(`nvl ATUAl
      lucro: ${empresa.lucro}%
      despesas: ${empresa.custo}
      capacidade de estoque: ${empresa.verCapacidade()}`);
      console.log("=".repeat(30) + "\n");
      console.log("=== Aumentar o nível da Empresa ===");
      console.log(`nvl C (inicial)
      lucro: 0%
      despesas: 150
      capacidade de estoque: 200`);
      console.log(`nvl B - R$ 5.000,00
      lucro: +10%
      despesas: +50
      capacidade de estoque: 400`);
      console.log(`nvl A - 10.000,00
      lucro: +15%
      despesas: +100
      capacidade de estoque: 600`);
      const nvl = teclado("digite para qual nível você deseja ir.");
      empresa.uparNvl(nvl);
      break;
    case 9: // fechando empresa
      console.log(`\n\nVocê encerrou a empresa com ${empresa.valor} reais.\n\n`);
      break;
    default:
      console.log("\nValor incorreto, tente novamente!");
      break;
  }
}
