import { Funcionario } from "./Funcionario";
import { Util } from "./Util";

export class NvlA extends Funcionario {
  constructor(nome: string) {
    super(nome + " Nível A ", 1, 100, Util.randomizar(20, 30));
  }
}
