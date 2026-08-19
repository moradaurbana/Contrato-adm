import React from 'react';
import { ContractData } from '../types';
import logo from '../assets/logo_horizontal_color_transparent.png';
import bgImage from '../assets/images/cover_bg_buildings_1787066453564.jpg';

interface Props {
  data: ContractData;
}

const formatDateToLongString = (dateString: string) => {
  if (!dateString) return '___ de _________ de 20__';
  const date = new Date(dateString + 'T00:00:00');
  if (isNaN(date.getTime())) return dateString;
  const formatter = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  return formatter.format(date);
};

export const ContractTemplate: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col gap-12 max-w-[800px] mx-auto print:gap-0">
      
      {/* COVER PAGE */}
      <div className="relative w-full min-h-[1131px] bg-gray-900 shadow-xl print:shadow-none print:break-after-page flex flex-col font-sans overflow-hidden">
        <img src={bgImage} className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Background" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/20" />
        
        <div className="relative z-10 flex-1 flex flex-col p-16">
          <div className="bg-white rounded-xl p-4 inline-flex self-start shadow-xl">
            <img src={logo} alt="Morada Urbana" className="h-10 object-contain" />
          </div>

          <div className="mt-auto mb-24 max-w-lg">
            <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-16 leading-relaxed">
              Soluções imobiliárias personalizadas com foco em excelência, transparência e valorização patrimonial.
            </p>
            <p className="text-[#ea580c] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Documento de referência
            </p>
            <h1 className="text-white text-6xl font-bold uppercase leading-tight tracking-tight">
              Contrato de<br/>Administração
            </h1>
          </div>

          <div className="mt-auto">
            <p className="text-gray-400 text-[10px] tracking-widest mb-1 uppercase">Preparado por</p>
            <p className="text-white text-sm font-bold tracking-widest uppercase">Equipe Morada Urbana</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTRACT PAGE */}
      <div className="bg-white p-12 text-[#334155] text-[12px] leading-relaxed font-serif min-h-[1131px] shadow-xl print:shadow-none relative">
        
        {/* HEADER */}
      <div className="flex justify-end items-start mb-8">
        <img src={logo} alt="Morada Urbana" className="h-12 object-contain" />
      </div>

      <h1 className="text-center text-sm font-bold text-[#0f172a] uppercase tracking-widest mb-10 border-b border-[#e2e8f0] pb-4">
        Contrato de prestação de serviços
      </h1>

      <div className="space-y-6 text-justify">
        <p>
          <strong className="text-[#0f172a]">CONTRATANTE:</strong> <span className="text-[#0f172a] uppercase">{data.contratanteNome || '___________________________'}</span>, {data.contratanteNacionalidade || '___________'}, {data.contratanteEstadoCivil || '___________'}, {data.contratanteProfissao || '___________'}, portador da Cédula de Identidade RG nº {data.contratanteRg || '___________'}, inscrito no CPF/MF sob o nº {data.contratanteCpf || '___________'}, residente e domiciliado na {data.contratanteEndereco || '_________________________________________________'}, e-mails: {data.contratanteEmail || '___________'} (“Locadora”);
        </p>

        <p>
          <strong className="text-[#0f172a]">CONTRATADO:</strong> SHIRLEY CRISTINA ORTEGA, brasileira, casada, corretora de imóveis, inscrita no CRECI da 2a. Região sob nº 231764 e no CPF sob nº 253.760.258-70, estabelecido com escritório profissional na rua General Alencastro Guimarães nº 253, bairro Vila Fiat Lux, na cidade de São Paulo-SP, Representante legal MORADA URBANA CONSULTORIA DE IMÓVEIS SLU LTDA, CNPJ/ME nº 52.098.528/0001-49.
        </p>

        <p>
          <strong className="text-[#0f172a]">OBJETO:</strong> A intermediação e a administração da locação do imóvel sito <span className="text-[#0f172a]">{data.objetoLocacao || '_________________________________________________'}</span>, numero de contribuinte perante a prefeitura de <span className="text-[#0f172a]">{data.cidadeIptu || '_______________'}</span> IPTU <span className="text-[#0f172a]">{data.iptu || '________________'}</span>.
        </p>

        <p className="italic">
          Por este particular instrumento, as partes supramencionadas resolvem, de comum acordo e de livre e espontânea vontade, firmar o presente Contrato de Prestação de Serviços, cujo objeto se encontra declinado no preâmbulo e a reger-se pelas seguintes cláusulas e condições.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">PRIMEIRA:</strong> O CONTRATANTE é legítimo senhor e possuidor do imóvel sito no endereço do preâmbulo, que se encontra ocupado pela locatária atual, com início de contrato em {formatDateToLongString(data.dataInicioLocacao)}, conforme contrato firmado entre as partes supra, para fins residenciais, pelo valor mensal mínimo de <strong className="text-[#0f172a]">R$ {data.valorAluguel || '________'} ({data.valorAluguelExtenso || '___________________'})</strong>; razão pela qual pretende se utilizar dos serviços do CONTRATADO para promover a seleção dos pretendentes à sua locação e sua subseqüente administração.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">SEGUNDA:</strong> Para essa finalidade, se compromete o CONTRATADO a efetuar completo levantamento das informações cadastrais dos eventuais pretendentes, de modo a poder selecionar dentre estes, aquele que vier a ser considerado como o mais indicado.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">§ ÚNICO:</strong> A indicação do pretendente pelo CONTRATADO não obriga o CONTRATANTE, que poderá a seu exclusivo critério, recusá-lo e indicar outro, desde que mediante expressa autorização e sob sua inteira responsabilidade.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">TERCEIRA:</strong> Além do pretendente, se compromete o CONTRATADO a diligenciar para obter a necessária garantia locatícia; {
            data.tipoGarantia === 'caucao' ? (
              <>Locatária cauciona junto à Locadora a quantia de <strong className="text-[#0f172a]">R$ {data.valorCaucao || '________'} ({data.valorCaucaoExtenso || '___________________'})</strong>, equivalente ao valor de {data.caucaoMeses || '__'} meses de Aluguel, a ser pago por meio de boleto bancário e ou PIX a ser enviado pela Administradora, valendo o comprovante da operação como prova do pagamento, sendo o valor integralmente depositado na conta do CONTRATANTE, até o dia de entrega das chaves e posse do inquilino do imóvel.</>
            ) : data.tipoGarantia === 'fiador' ? (
              <>Locatária apresenta como garantia a fiança, tendo como garantia o imóvel situado na <strong className="text-[#0f172a]">{data.enderecoFiador || '___________________________'}</strong>, matrícula <strong className="text-[#0f172a]">{data.matriculaFiador || '___________'}</strong>.</>
            ) : (
              <>Locatária apresenta como garantia {data.tipoGarantia === 'seguro_fianca' ? 'Seguro Fiança' : 'Título de Capitalização'}, no valor de <strong className="text-[#0f172a]">R$ {data.valorGarantia || '________'}</strong>, apólice/título nº <strong className="text-[#0f172a]">{data.numeroApolice || '___________'}</strong>.</>
            )
          }
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">QUARTA:</strong> Selecionado o pretendente e obtida a garantia locatícia, com aprovação do CONTRATANTE, compromete-se o CONTRATADO a elaborar e celebrar o respectivo contrato, nele estabelecido o prazo de vigência da locação, desde já estabelecido mínimo de <strong className="text-[#0f172a]">{data.prazoContrato || '__'}</strong> meses, com a menção de que caberá ao locatário o pagamento de todos os encargos, inclusive o prêmio de seguro-incêndio, a ser realizado e reajuste anual do aluguel pelos índices do IPCA (Índice Nacional de Preços ao Consumidor Amplo).
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">QUINTA:</strong> Pela intermediação da locação, será devido à CONTRATADA o valor correspondente a 01 (um) aluguel, a ser pago por ocasião do primeiro recebimento.
          <br/>
          <strong className="text-[#0f172a] not-italic">5.1.</strong> Não haverá cobrança adicional em razão de reajustes, revisões ou majorações de aluguel ocorridas durante a vigência da locação.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">SEXTA:</strong> Pela administração da locação, será devido ao CONTRATADO o percentual de <strong className="text-[#0f172a]">{data.taxaAdministracao || '__'}% ({data.taxaAdministracaoExtenso || '___________'})</strong> sobre o valor de cada aluguel mensal vigente.
          <br/>
          Condomínio, IPTU e qualquer outra taxa ou despesa referente ao imóvel locado, será cobrado do inquilino e repassado e depositando o valor líquido, já descontada a taxa de administração, em até 2 (dois) dias úteis do seu pagamento, na conta corrente do CONTRATANTE, <strong className="text-[#0f172a]">{data.contratanteNome || '___________________________'}</strong>, CPF <strong className="text-[#0f172a]">{data.contratanteCpf || '___________'}</strong>, Banco <strong className="text-[#0f172a]">{data.contratanteBanco || '______'}</strong>, Ag <strong className="text-[#0f172a]">{data.contratanteAgencia || '______'}</strong>, C/C <strong className="text-[#0f172a]">{data.contratanteConta || '__________'}</strong>, PIX <strong className="text-[#0f172a]">{data.contratantePix || '__________________'}</strong>; cujo comprovante servirá como recibo de pagamento.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">SÉTIMA:</strong> Além do já estabelecido nas cláusulas anteriores, obriga-se o CONTRATADO:
          <br/><br/>
          a. verificar o estado do imóvel, antes e após o término da locação, lavrando para isso os necessários termos de vistoria;<br/>
          b. divulgar, pelos meios usuais e a seu critério, a oferta da locação;<br/>
          c. cobrar os alugueres e respectivos encargos nas épocas convencionadas, deles deduzindo os honorários devidos;<br/>
          d. tomar as medidas judiciais que se fizerem necessário, para cobrar os alugueres impagos ou promover o despejo do inquilino, cabendo ao CONTRATANTE os Honorários do Advogado e despesas judiciais, sendo pagas antecipadamente; assinando para este fim e neste ato o competente instrumento de mandato ( ou no momento em que vier a ser solicitado); A propositura de ações judiciais dependerá de autorização expressa do CONTRATANTE.<br/>
          e. providenciar nos reparos que se fizerem necessário para a conservação do imóvel na vigência da locação, mediante expressa autorização do CONTRATANTE e à vista de orçamentos elaborados por profissionais competentes.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">§ ÚNICO:</strong> Fica estabelecido que, as ações que venham a objetivar a desocupação do imóvel, seja pelo término do prazo contratual ou para uso próprio, bem como as revisionais de aluguel, terão as custas processuais e os honorários advocatícios suportados exclusivamente pelo CONTRATANTE.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">OITAVA:</strong> Em contrapartida se obriga o CONTRATANTE:
          <br/><br/>
          a. não interferir na relação jurídica existente entre o CONTRATADO e o inquilino e/ou fiadores, sem prévia ciência do CONTRATADO;<br/>
          b. não receber, sob qualquer hipótese, na vigência desse contrato e diretamente do inquilino e/ou fiador, valores referentes a locação ou as chaves do imóvel;<br/>
          c. Este contrato não estabelece exclusividade para venda do imóvel, devendo eventual intermediação de venda ser objeto de instrumento próprio;
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">NONA:</strong> O CONTRATADO fica isento de qualquer responsabilidade por fatos alheios à administração da locação, como arrombamentos, ocupação indevida, cessão irregular da locação e eventuais danos a ele causados em razão desses fatos, comprometendo-se, porém, a tomar as medidas judiciais ou extrajudiciais que estiverem ao seu alcance, mediante autorização expressa do CONTRATANTE, a quem caberá arcar com os ônus processuais e honorários advocatícios.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">CLÁUSULA DÉCIMA – DA VIGÊNCIA</strong><br/>
          <strong>10.1.</strong> O presente contrato vigorará pelo mesmo prazo do contrato de locação, renovando-se automaticamente enquanto perdurar a administração.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">CLÁUSULA DÉCIMA PRIMEIRA – DA RESCISÃO</strong><br/>
          <strong>11.1.</strong> O presente contrato poderá ser rescindido por qualquer das partes, imotivadamente, mediante aviso prévio de 30 (trinta) dias.<br/>
          <strong>11.2.</strong> Na hipótese de rescisão imotivada pelo CONTRATANTE, será devida à CONTRATADA indenização limitada ao equivalente a 1 (um) mês da taxa de administração, não sendo devidos honorários futuros.<br/>
          <strong>11.3.</strong> Em caso de descumprimento contratual, a rescisão poderá ocorrer sem ônus à parte prejudicada.
        </p>

        <p>
          <strong className="text-[#0f172a] not-italic">DÉCIMA-SEGUNDA:</strong> Fica eleito o Foro da Comarca de São Paulo, para a solução das questões decorrentes do presente instrumento, renunciando as partes a qualquer outro, por mais privilegiado que lhes possa ser.
        </p>

        <p>
          E por estarem assim justas e contratadas, assinam o presente, em duas vias de igual teor e forma e na presença das testemunhas retro, para que surta seus legais e jurídicos efeitos, obrigando - se por si, seus herdeiros e/ou sucessores, ao fiel cumprimento de todas as suas cláusulas e condições.
        </p>

        <div className="pt-8 pb-16">
          <p>{data.cidadeEmissao || '_______________'}, {formatDateToLongString(data.dataEmissao)}</p>
        </div>

        <div className="mt-16 flex justify-between pt-10 border-t border-[#e2e8f0] gap-12">
          <div className="flex-1 text-center">
            <div className="border-t border-[#cbd5e1] mb-2 mx-auto w-4/5 pt-2 uppercase text-[10px]">Contratante</div>
            <p className="font-bold text-[#0f172a] uppercase">{data.contratanteNome || '___________________________'}</p>
          </div>
          <div className="flex-1 text-center">
            <div className="border-t border-[#cbd5e1] mb-2 mx-auto w-4/5 pt-2 uppercase text-[10px]">Contratada</div>
            <p className="font-bold text-[#0f172a] uppercase">MORADA URBANA</p>
            <p className="text-[#475569]">Shirley Cristina Ortega</p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-16 pt-6 border-t border-[#e2e8f0] text-center text-[10px] text-[#94a3b8] font-sans flex flex-col space-y-1">
          <span>Rua General Alencastro Guimarães, 253 CEP: 05101-050 – São Paulo – SP</span>
          <span>Celular: (11) 99829-7960 | www.moradaurbana.com.br</span>
        </div>

      </div>
      </div>
    </div>
  );
};
