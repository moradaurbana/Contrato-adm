import React from 'react';
import { UseFormRegister, FieldErrors, UseFormReset } from 'react-hook-form';
import { ContractData, defaultContractData } from '../types';
import { FormInput } from './FormInput';

interface Props {
  register: UseFormRegister<ContractData>;
  errors: FieldErrors<ContractData>;
  reset: UseFormReset<ContractData>;
  formData: ContractData;
}

export const SidebarForm: React.FC<Props> = ({ register, errors, reset, formData }) => {
  return (
    <div className="w-full h-full bg-[#121212] overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Dados do Contrato</h2>
          <button
            type="button"
            onClick={() => reset(defaultContractData)}
            className="text-xs text-amber-600 hover:text-amber-500 transition-colors"
          >
            Resetar
          </button>
        </div>
      </div>

      {/* Section: Contratante */}
      <section>
        <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-4 border-b border-white/5 pb-2">1. Contratante (Proprietário)</h3>
        <div className="flex flex-col gap-3">
          <FormInput label="Nome Completo" name="contratanteNome" register={register} errors={errors} />
          <div className="grid grid-cols-2 gap-3">
            <FormInput label="Nacionalidade" name="contratanteNacionalidade" register={register} errors={errors} />
            <FormInput label="Estado Civil" name="contratanteEstadoCivil" register={register} errors={errors} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FormInput label="Profissão" name="contratanteProfissao" register={register} errors={errors} />
            <FormInput label="RG" name="contratanteRg" register={register} errors={errors} />
          </div>
          <FormInput label="CPF" name="contratanteCpf" register={register} errors={errors} />
          <FormInput label="Endereço Completo" name="contratanteEndereco" type="textarea" register={register} errors={errors} />
          <FormInput label="E-mail" name="contratanteEmail" type="email" register={register} errors={errors} />
          
          <div className="mt-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Dados Bancários</div>
          <div className="grid grid-cols-2 gap-3">
            <FormInput label="Banco" name="contratanteBanco" register={register} errors={errors} />
            <FormInput label="Agência" name="contratanteAgencia" register={register} errors={errors} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FormInput label="Conta Corrente" name="contratanteConta" register={register} errors={errors} />
            <FormInput label="Chave PIX" name="contratantePix" register={register} errors={errors} />
          </div>
        </div>
      </section>

      <div className="border-t border-white/5 my-2"></div>

      {/* Section: Objeto e Condições */}
      <section>
        <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-4 border-b border-white/5 pb-2">2. Imóvel e Valores</h3>
        <div className="flex flex-col gap-3">
          <FormInput label="Objeto (Endereço, Vagas...)" name="objetoLocacao" type="textarea" placeholder="Ex: Avenida Mofarrej, nº 1500, Apto 52..." register={register} errors={errors} />
          <div className="grid grid-cols-2 gap-3">
            <FormInput label="Cidade da Prefeitura (IPTU)" name="cidadeIptu" placeholder="Ex: São Paulo" register={register} errors={errors} />
            <FormInput label="Nº Contribuinte (IPTU)" name="iptu" placeholder="Ex: 097.009.0124-6" register={register} errors={errors} />
          </div>
          <FormInput label="Início da Locação Atual" name="dataInicioLocacao" type="date" register={register} errors={errors} />
          
          <div className="grid grid-cols-2 gap-3">
            <FormInput label="Valor do Aluguel (R$)" name="valorAluguel" placeholder="Ex: 4.000,00" register={register} errors={errors} />
            <FormInput label="Valor Aluguel Extenso" name="valorAluguelExtenso" placeholder="Ex: quatro mil reais" register={register} errors={errors} />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <FormInput label="Prazo do Contrato (meses)" name="prazoContrato" type="number" register={register} errors={errors} />
            <FormInput label="Taxa Adm (%)" name="taxaAdministracao" type="number" register={register} errors={errors} />
          </div>
          <FormInput label="Taxa Adm Extenso" name="taxaAdministracaoExtenso" placeholder="Ex: cinco" register={register} errors={errors} />
        </div>
      </section>

      <div className="border-t border-white/5 my-2"></div>

      {/* Section: Garantia */}
      <section>
        <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-4 border-b border-white/5 pb-2">3. Garantia Locatícia</h3>
        <div className="flex flex-col gap-3">
          <FormInput 
            label="Tipo de Garantia" 
            name="tipoGarantia" 
            type="select" 
            register={register} 
            errors={errors} 
            options={[
              { value: 'caucao', label: 'Caução em Dinheiro' },
              { value: 'fiador', label: 'Fiador com Imóvel' },
              { value: 'seguro_fianca', label: 'Seguro Fiança' },
              { value: 'titulo_capitalizacao', label: 'Título de Capitalização' },
            ]}
          />

          {formData.tipoGarantia === 'caucao' && (
            <>
              <div className="grid grid-cols-2 gap-3">
                <FormInput label="Valor Caução (R$)" name="valorCaucao" placeholder="Ex: 12.000,00" register={register} errors={errors} />
                <FormInput label="Meses Caução" name="caucaoMeses" type="number" placeholder="Ex: 3" register={register} errors={errors} />
              </div>
              <FormInput label="Valor Caução Extenso" name="valorCaucaoExtenso" placeholder="Ex: doze mil reais" register={register} errors={errors} />
            </>
          )}

          {formData.tipoGarantia === 'fiador' && (
            <>
              <FormInput label="Endereço do Imóvel do Fiador" name="enderecoFiador" type="textarea" register={register} errors={errors} />
              <FormInput label="Matrícula do Imóvel" name="matriculaFiador" register={register} errors={errors} />
            </>
          )}

          {(formData.tipoGarantia === 'seguro_fianca' || formData.tipoGarantia === 'titulo_capitalizacao') && (
            <>
              <FormInput label="Valor da Garantia (R$)" name="valorGarantia" placeholder="Ex: 15.000,00" register={register} errors={errors} />
              <FormInput label="Número da Apólice/Título" name="numeroApolice" register={register} errors={errors} />
            </>
          )}
        </div>
      </section>

      <div className="border-t border-white/5 my-2"></div>

      {/* Section: Emissão */}
      <section>
        <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-4 border-b border-white/5 pb-2">4. Emissão</h3>
        <div className="grid grid-cols-2 gap-3">
          <FormInput label="Cidade" name="cidadeEmissao" register={register} errors={errors} />
          <FormInput label="Data" name="dataEmissao" type="date" register={register} errors={errors} />
        </div>
      </section>

      <div className="h-10 shrink-0"></div>
    </div>
  );
};
