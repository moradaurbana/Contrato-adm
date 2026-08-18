export type TipoGarantia = 'caucao' | 'fiador' | 'seguro_fianca' | 'titulo_capitalizacao';

export interface ContractData {
  // Contratante
  contratanteNome: string;
  contratanteNacionalidade: string;
  contratanteEstadoCivil: string;
  contratanteProfissao: string;
  contratanteRg: string;
  contratanteCpf: string;
  contratanteEndereco: string;
  contratanteEmail: string;
  contratanteBanco: string;
  contratanteAgencia: string;
  contratanteConta: string;
  contratantePix: string;

  // Objeto
  objetoLocacao: string;
  cidadeIptu: string;
  iptu: string;

  // Valores e Condições
  dataInicioLocacao: string;
  valorAluguel: string;
  valorAluguelExtenso: string;
  prazoContrato: string;
  taxaAdministracao: string;
  taxaAdministracaoExtenso: string;

  // Garantia
  tipoGarantia: TipoGarantia;
  valorCaucao: string;
  valorCaucaoExtenso: string;
  caucaoMeses: string;
  enderecoFiador: string;
  matriculaFiador: string;
  numeroApolice: string;
  valorGarantia: string;

  // Emissão
  cidadeEmissao: string;
  dataEmissao: string;
}

export const defaultContractData: ContractData = {
  contratanteNome: '',
  contratanteNacionalidade: 'brasileiro(a)',
  contratanteEstadoCivil: 'casado(a)',
  contratanteProfissao: '',
  contratanteRg: '',
  contratanteCpf: '',
  contratanteEndereco: '',
  contratanteEmail: '',
  contratanteBanco: '',
  contratanteAgencia: '',
  contratanteConta: '',
  contratantePix: '',
  
  objetoLocacao: '',
  cidadeIptu: 'São Paulo',
  iptu: '',
  
  dataInicioLocacao: '',
  valorAluguel: '',
  valorAluguelExtenso: '',
  prazoContrato: '30',
  taxaAdministracao: '5',
  taxaAdministracaoExtenso: 'cinco',
  
  tipoGarantia: 'caucao',
  valorCaucao: '',
  valorCaucaoExtenso: '',
  caucaoMeses: '3',
  enderecoFiador: '',
  matriculaFiador: '',
  numeroApolice: '',
  valorGarantia: '',
  
  cidadeEmissao: 'São Paulo',
  dataEmissao: new Date().toISOString().split('T')[0],
};
