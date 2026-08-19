import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
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

const styles = StyleSheet.create({
  coverPage: {
    backgroundColor: '#1e293b',
  },
  coverBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3,
    objectFit: 'cover',
  },
  coverContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 60,
    flexDirection: 'column',
  },
  coverLogoBox: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  coverLogo: {
    height: 30,
    objectFit: 'contain',
  },
  coverTextContainer: {
    marginBottom: 80,
  },
  coverDesc: {
    color: '#94a3b8',
    fontSize: 9,
    fontFamily: 'Helvetica',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 60,
    width: '70%',
    lineHeight: 1.5,
  },
  coverTag: {
    color: '#ea580c',
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 10,
  },
  coverTitle: {
    color: '#ffffff',
    fontSize: 42,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    lineHeight: 1.1,
  },
  coverFooter: {
    // Removed auto margin
  },
  coverFooterLabel: {
    color: '#94a3b8',
    fontSize: 9,
    fontFamily: 'Helvetica',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 4,
  },
  coverFooterValue: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  page: {
    paddingTop: 90,
    paddingBottom: 80, // Extra space for footer
    paddingHorizontal: 60,
    fontFamily: 'Times-Roman',
    fontSize: 11,
    color: '#1e293b',
    lineHeight: 1.5,
  },
  headerContainer: {
    position: 'absolute',
    top: 40,
    right: 60,
  },
  logo: {
    height: 45,
    objectFit: 'contain',
  },
  brandName: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: '#b4985a',
    marginBottom: 2,
  },
  brandSub: {
    fontSize: 10,
    color: '#64748b',
  },
  title: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    borderBottomStyle: 'solid',
  },
  p: {
    marginBottom: 10,
    textAlign: 'justify',
  },
  bold: {
    fontFamily: 'Times-Bold',
  },
  italic: {
    fontFamily: 'Times-Italic',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 60,
    right: 60,
    textAlign: 'center',
    fontSize: 9,
    color: '#94a3b8',
    fontFamily: 'Helvetica',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    borderTopStyle: 'solid',
    paddingTop: 10,
  },
  signatures: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sigBlock: {
    width: '45%',
    borderTopWidth: 1,
    borderTopColor: '#cbd5e1',
    borderTopStyle: 'solid',
    paddingTop: 5,
    alignItems: 'center',
  },
  sigLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  sigName: {
    fontFamily: 'Times-Bold',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  sigSub: {
    fontFamily: 'Times-Roman',
    fontSize: 10,
    color: '#475569',
  }
});

export const ContractPDF: React.FC<Props> = ({ data }) => {
  return (
    <Document>
      {/* COVER PAGE */}
      <Page size="A4" style={styles.coverPage}>
        <Image src={bgImage} style={styles.coverBg} />
        
        <View style={styles.coverContent}>
          <View style={styles.coverLogoBox}>
            <Image src={logo} style={styles.coverLogo} />
          </View>

          <View style={{ flexGrow: 1 }} />

          <View style={styles.coverTextContainer}>
            <Text style={styles.coverDesc}>
              Soluções imobiliárias personalizadas com foco em excelência, transparência e valorização patrimonial.
            </Text>
            <Text style={styles.coverTag}>Documento de referência</Text>
            <Text style={styles.coverTitle}>Contrato de</Text>
            <Text style={styles.coverTitle}>Administração</Text>
          </View>

          <View style={styles.coverFooter}>
            <Text style={styles.coverFooterLabel}>Preparado por</Text>
            <Text style={styles.coverFooterValue}>Equipe Morada Urbana</Text>
          </View>
        </View>
      </Page>

      {/* MAIN CONTENT PAGES */}
      <Page size="A4" style={styles.page}>
        
        {/* HEADER */}
        <View style={styles.headerContainer} fixed>
          <Image src={logo} style={styles.logo} />
        </View>

        <Text style={styles.title}>Contrato de prestação de serviços</Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>CONTRATANTE:</Text> {data.contratanteNome ? data.contratanteNome.toUpperCase() : '___________________________'}, {data.contratanteNacionalidade || '___________'}, {data.contratanteEstadoCivil || '___________'}, {data.contratanteProfissao || '___________'}, portador da Cédula de Identidade RG nº {data.contratanteRg || '___________'}, inscrito no CPF/MF sob o nº {data.contratanteCpf || '___________'}, residente e domiciliado na {data.contratanteEndereco || '_________________________________________________'}, e-mails: {data.contratanteEmail || '___________'} (“Locadora”);
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>CONTRATADO:</Text> SHIRLEY CRISTINA ORTEGA, brasileira, casada, corretora de imóveis, inscrita no CRECI da 2a. Região sob nº 231764 e no CPF sob nº 253.760.258-70, estabelecido com escritório profissional na rua General Alencastro Guimarães nº 253, bairro Vila Fiat Lux, na cidade de São Paulo-SP, Representante legal MORADA URBANA CONSULTORIA DE IMÓVEIS SLU LTDA, CNPJ/ME nº 52.098.528/0001-49.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>OBJETO:</Text> A intermediação e a administração da locação do imóvel sito {data.objetoLocacao || '_________________________________________________'}, numero de contribuinte perante a prefeitura de {data.cidadeIptu || '_______________'} IPTU {data.iptu || '________________'}.
        </Text>

        <Text style={[styles.p, styles.italic]}>
          Por este particular instrumento, as partes supramencionadas resolvem, de comum acordo e de livre e espontânea vontade, firmar o presente Contrato de Prestação de Serviços, cujo objeto se encontra declinado no preâmbulo e a reger-se pelas seguintes cláusulas e condições.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>PRIMEIRA:</Text> O CONTRATANTE é legítimo senhor e possuidor do imóvel sito no endereço do preâmbulo, que se encontra ocupado pela locatária atual, com início de contrato em {formatDateToLongString(data.dataInicioLocacao)}, conforme contrato firmado entre as partes supra, para fins residenciais, pelo valor mensal mínimo de <Text style={styles.bold}>R$ {data.valorAluguel || '________'} ({data.valorAluguelExtenso || '___________________'})</Text>; razão pela qual pretende se utilizar dos serviços do CONTRATADO para promover a seleção dos pretendentes à sua locação e sua subseqüente administração.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>SEGUNDA:</Text> Para essa finalidade, se compromete o CONTRATADO a efetuar completo levantamento das informações cadastrais dos eventuais pretendentes, de modo a poder selecionar dentre estes, aquele que vier a ser considerado como o mais indicado.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>§ ÚNICO:</Text> A indicação do pretendente pelo CONTRATADO não obriga o CONTRATANTE, que poderá a seu exclusivo critério, recusá-lo e indicar outro, desde que mediante expressa autorização e sob sua inteira responsabilidade.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>TERCEIRA:</Text> Além do pretendente, se compromete o CONTRATADO a diligenciar para obter a necessária garantia locatícia; {
            data.tipoGarantia === 'caucao' ? (
              `Locatária cauciona junto à Locadora a quantia de R$ ${data.valorCaucao || '________'} (${data.valorCaucaoExtenso || '___________________'}), equivalente ao valor de ${data.caucaoMeses || '__'} meses de Aluguel, a ser pago por meio de boleto bancário e ou PIX a ser enviado pela Administradora, valendo o comprovante da operação como prova do pagamento, sendo o valor integralmente depositado na conta do CONTRATANTE, até o dia de entrega das chaves e posse do inquilino do imóvel.`
            ) : data.tipoGarantia === 'fiador' ? (
              `Locatária apresenta como garantia a fiança, tendo como garantia o imóvel situado na ${data.enderecoFiador || '___________________________'}, matrícula ${data.matriculaFiador || '___________'}.`
            ) : (
              `Locatária apresenta como garantia ${data.tipoGarantia === 'seguro_fianca' ? 'Seguro Fiança' : 'Título de Capitalização'}, no valor de R$ ${data.valorGarantia || '________'}, apólice/título nº ${data.numeroApolice || '___________'}.`
            )
          }
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>QUARTA:</Text> Selecionado o pretendente e obtida a garantia locatícia, com aprovação do CONTRATANTE, compromete-se o CONTRATADO a elaborar e celebrar o respectivo contrato, nele estabelecido o prazo de vigência da locação, desde já estabelecido mínimo de <Text style={styles.bold}>{data.prazoContrato || '__'}</Text> meses, com a menção de que caberá ao locatário o pagamento de todos os encargos, inclusive o prêmio de seguro-incêndio, a ser realizado e reajuste anual do aluguel pelos índices do IPCA (Índice Nacional de Preços ao Consumidor Amplo).
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>QUINTA:</Text> Pela intermediação da locação, será devido à CONTRATADA o valor correspondente a 01 (um) aluguel, a ser pago por ocasião do primeiro recebimento.
          {"\n"}
          <Text style={styles.bold}>5.1.</Text> Não haverá cobrança adicional em razão de reajustes, revisões ou majorações de aluguel ocorridas durante a vigência da locação.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>SEXTA:</Text> Pela administração da locação, será devido ao CONTRATADO o percentual de <Text style={styles.bold}>{data.taxaAdministracao || '__'}% ({data.taxaAdministracaoExtenso || '___________'})</Text> sobre o valor de cada aluguel mensal vigente.
          {"\n"}
          Condomínio, IPTU e qualquer outra taxa ou despesa referente ao imóvel locado, será cobrado do inquilino e repassado e depositando o valor líquido, já descontada a taxa de administração, em até 2 (dois) dias úteis do seu pagamento, na conta corrente do CONTRATANTE, <Text style={styles.bold}>{data.contratanteNome || '___________________________'}</Text>, CPF <Text style={styles.bold}>{data.contratanteCpf || '___________'}</Text>, Banco <Text style={styles.bold}>{data.contratanteBanco || '______'}</Text>, Ag <Text style={styles.bold}>{data.contratanteAgencia || '______'}</Text>, C/C <Text style={styles.bold}>{data.contratanteConta || '__________'}</Text>, PIX <Text style={styles.bold}>{data.contratantePix || '__________________'}</Text>; cujo comprovante servirá como recibo de pagamento.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>SÉTIMA:</Text> Além do já estabelecido nas cláusulas anteriores, obriga-se o CONTRATADO:
          {"\n\n"}
          a. verificar o estado do imóvel, antes e após o término da locação, lavrando para isso os necessários termos de vistoria;{"\n"}
          b. divulgar, pelos meios usuais e a seu critério, a oferta da locação;{"\n"}
          c. cobrar os alugueres e respectivos encargos nas épocas convencionadas, deles deduzindo os honorários devidos;{"\n"}
          d. tomar as medidas judiciais que se fizerem necessário, para cobrar os alugueres impagos ou promover o despejo do inquilino, cabendo ao CONTRATANTE os Honorários do Advogado e despesas judiciais, sendo pagas antecipadamente; assinando para este fim e neste ato o competente instrumento de mandato ( ou no momento em que vier a ser solicitado); A propositura de ações judiciais dependerá de autorização expressa do CONTRATANTE.{"\n"}
          e. providenciar nos reparos que se fizerem necessário para a conservação do imóvel na vigência da locação, mediante expressa autorização do CONTRATANTE e à vista de orçamentos elaborados por profissionais competentes.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>§ ÚNICO:</Text> Fica estabelecido que, as ações que venham a objetivar a desocupação do imóvel, seja pelo término do prazo contratual ou para uso próprio, bem como as revisionais de aluguel, terão as custas processuais e os honorários advocatícios suportados exclusivamente pelo CONTRATANTE.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>OITAVA:</Text> Em contrapartida se obriga o CONTRATANTE:
          {"\n\n"}
          a. não interferir na relação jurídica existente entre o CONTRATADO e o inquilino e/ou fiadores, sem prévia ciência do CONTRATADO;{"\n"}
          b. não receber, sob qualquer hipótese, na vigência desse contrato e diretamente do inquilino e/ou fiador, valores referentes a locação ou as chaves do imóvel;{"\n"}
          c. Este contrato não estabelece exclusividade para venda do imóvel, devendo eventual intermediação de venda ser objeto de instrumento próprio;
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>NONA:</Text> O CONTRATADO fica isento de qualquer responsabilidade por fatos alheios à administração da locação, como arrombamentos, ocupação indevida, cessão irregular da locação e eventuais danos a ele causados em razão desses fatos, comprometendo-se, porém, a tomar as medidas judiciais ou extrajudiciais que estiverem ao seu alcance, mediante autorização expressa do CONTRATANTE, a quem caberá arcar com os ônus processuais e honorários advocatícios.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>CLÁUSULA DÉCIMA – DA VIGÊNCIA</Text>{"\n"}
          <Text style={styles.bold}>10.1.</Text> O presente contrato vigorará pelo mesmo prazo do contrato de locação, renovando-se automaticamente enquanto perdurar a administração.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>CLÁUSULA DÉCIMA PRIMEIRA – DA RESCISÃO</Text>{"\n"}
          <Text style={styles.bold}>11.1.</Text> O presente contrato poderá ser rescindido por qualquer das partes, imotivadamente, mediante aviso prévio de 30 (trinta) dias.{"\n"}
          <Text style={styles.bold}>11.2.</Text> Na hipótese de rescisão imotivada pelo CONTRATANTE, será devida à CONTRATADA indenização limitada ao equivalente a 1 (um) mês da taxa de administração, não sendo devidos honorários futuros.{"\n"}
          <Text style={styles.bold}>11.3.</Text> Em caso de descumprimento contratual, a rescisão poderá ocorrer sem ônus à parte prejudicada.
        </Text>

        <Text style={styles.p}>
          <Text style={styles.bold}>DÉCIMA-SEGUNDA:</Text> Fica eleito o Foro da Comarca de São Paulo, para a solução das questões decorrentes do presente instrumento, renunciando as partes a qualquer outro, por mais privilegiado que lhes possa ser.
        </Text>

        <Text style={styles.p}>
          E por estarem assim justas e contratadas, assinam o presente, em duas vias de igual teor e forma e na presença das testemunhas retro, para que surta seus legais e jurídicos efeitos, obrigando - se por si, seus herdeiros e/ou sucessores, ao fiel cumprimento de todas as suas cláusulas e condições.
        </Text>

        <View style={{ marginTop: 20, marginBottom: 30 }} wrap={false}>
          <Text>{data.cidadeEmissao || '_______________'}, {formatDateToLongString(data.dataEmissao)}</Text>
        </View>

        <View style={styles.signatures} wrap={false}>
          <View style={styles.sigBlock}>
            <Text style={styles.sigLabel}>Contratante</Text>
            <Text style={styles.sigName}>{data.contratanteNome || '___________________________'}</Text>
          </View>
          <View style={styles.sigBlock}>
            <Text style={styles.sigLabel}>Contratada</Text>
            <Text style={styles.sigName}>MORADA URBANA</Text>
            <Text style={styles.sigSub}>Shirley Cristina Ortega</Text>
          </View>
        </View>

        {/* FIXED FOOTER ON EVERY PAGE */}
        <View style={styles.footer} fixed>
          <Text>Rua General Alencastro Guimarães, 253 CEP: 05101-050 – São Paulo – SP</Text>
          <Text style={{ marginTop: 2 }}>Celular: (11) 99829-7960  |  www.moradaurbana.com.br</Text>
        </View>

      </Page>
    </Document>
  );
};
