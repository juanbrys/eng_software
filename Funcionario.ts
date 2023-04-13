export abstract class Funcionario {
  constructor(
    protected _nome: string,
    protected _nivel: number,
    protected _salario: number,
    protected _habilidade: number
  ) {}

  // public abstract atacar(personagem: NvlA): void;

  // public abstract contraAtacar(personagem: Personagem): void;

  // public abstract aprimorarHabilidadePrincipal(): void;

  // public abstract regenerarVida(): void;

  public get nome(): string {
    return this._nome;
  }
  public get nivel(): number {
    return this._nivel;
  }
  public get salario(): number {
    return this._salario;
  }
  public get habilidade(): number {
    return this._habilidade;
  }
}
