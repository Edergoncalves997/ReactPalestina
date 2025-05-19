import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from 'expo-router';
import Button from '@/app/components/Button';
import Pesquisa from '../components/consultaApi'; 
export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <Text style={styles.title}>Sobre Jair Bolsonaro</Text>

<Text style={styles.historicalText}>
  Jair Messias Bolsonaro é um ex-militar e político brasileiro, conhecido por sua postura conservadora e polêmica trajetória política. Nascido em 21 de março de 1955, em Glicério, São Paulo, Bolsonaro teve uma carreira militar destacada antes de se aventurar na política, onde se tornou uma das figuras mais polarizadoras da história recente do Brasil. Ele foi presidente do Brasil de 2019 a 2023, após conquistar a vitória nas eleições de 2018.
</Text>

<Text style={styles.sectionTitle}>Início de Carreira</Text>
<Text style={styles.historicalText}>
  Formado na Academia Militar das Agulhas Negras, Bolsonaro ingressou no Exército Brasileiro em 1973 e, durante sua carreira, alcançou o posto de capitão. Em 1988, após um incidente envolvendo protestos militares e insatisfação com as condições de trabalho, ele decidiu entrar para a política, sendo eleito vereador do Rio de Janeiro pelo Partido Democrata Cristão (PDC). Em 1991, foi eleito deputado federal, cargo que ocupou por sete mandatos consecutivos.
</Text>

<Text style={styles.sectionTitle}>O Surgimento do "mito"</Text>
<Text style={styles.historicalText}>
  Bolsonaro começou a ser conhecido pela sua postura nacionalista e militarista, defendendo abertamente a ditadura militar (1964-1985) e se posicionando contra a esquerda. Sua retórica e seus posicionamentos frequentemente controversos lhe garantiram uma base fiel de seguidores, mas também uma imensa resistência da oposição. O apelido "Mito", que se popularizou durante a campanha presidencial de 2018, surgiu de sua postura desafiadora e seu discurso contra o sistema político tradicional.
</Text>

<Text style={styles.sectionTitle}>Campanha Presidencial 2018</Text>
<Text style={styles.historicalText}>
  Em 2018, Bolsonaro lançou sua candidatura à presidência pelo Partido Social Liberal (PSL), aproveitando o crescente descontentamento popular com a corrupção e os escândalos envolvendo políticos tradicionais. Sua campanha foi baseada em promessas de combate à corrupção, segurança pública e valorização dos valores familiares conservadores. O uso massivo das redes sociais, especialmente o WhatsApp, foi um fator chave na sua ascensão. Ele se apresentou como um outsider político, rompendo com o sistema político tradicional.
</Text>

<Text style={styles.sectionTitle}>Governo (2019–2023)</Text>
<Text style={styles.historicalText}>
  Durante seu governo, Bolsonaro implementou uma série de reformas econômicas, incluindo a reforma da previdência e a tentativa de privatização de várias estatais. Seu governo também foi marcado pela flexibilização das leis de posse de armas e pelo incentivo a políticas de segurança pública mais duras. No entanto, sua gestão também ficou marcada por polêmicas, como o enfrentamento com o Supremo Tribunal Federal (STF) e o Congresso Nacional, além da retórica de confronto com a imprensa e setores da sociedade civil.
</Text>

<Text style={styles.sectionTitle}>A Pandemia e as Controvérsias</Text>
<Text style={styles.historicalText}>
  A pandemia da COVID-19 foi um dos maiores desafios de seu governo. Bolsonaro minimizou a gravidade da doença, chamou o vírus de "gripezinha" e criticou medidas de distanciamento social e o uso de máscaras. Essa postura gerou uma série de controvérsias, inclusive com a recusa a adquirir vacinas, embora o governo tenha posteriormente avançado com a vacinação. Sua postura durante a pandemia levou a críticas tanto de adversários políticos quanto de membros da comunidade internacional.
</Text>

<Text style={styles.sectionTitle}>Políticas Econômicas</Text>
<Text style={styles.historicalText}>
  No campo econômico, o governo de Bolsonaro focou na implementação de uma agenda de liberalização, com o ministro Paulo Guedes à frente do Ministério da Economia. Entre as principais medidas estão a reforma da previdência, a tentativa de privatização de empresas estatais e a redução de impostos em alguns setores. Apesar disso, a gestão econômica também enfrentou desafios como o aumento das desigualdades sociais, a inflação e o desemprego, fatores que impactaram sua popularidade em momentos distintos de seu governo.
</Text>

<Text style={styles.sectionTitle}>Relações Exteriores</Text>
<Text style={styles.historicalText}>
  A política externa de Bolsonaro também foi uma área controversa. Seu governo estabeleceu estreitos laços com o presidente dos Estados Unidos, Donald Trump, e outros governos de direita, enquanto distanciava o Brasil de países europeus, especialmente durante discussões sobre o meio ambiente e a preservação da Amazônia. A crise ambiental, com o aumento do desmatamento e dos incêndios na Amazônia, atraiu críticas de líderes mundiais e organizações internacionais. Bolsonaro se posicionou de forma dura contra a intervenção externa na soberania brasileira.
</Text>

<Text style={styles.sectionTitle}>Legado e Pós-Presidência</Text>
<Text style={styles.historicalText}>
  O legado de Bolsonaro ainda é objeto de intenso debate. Seus apoiadores o consideram um líder corajoso que enfrentou a corrupção e tomou medidas necessárias para o Brasil, enquanto seus críticos o acusam de alimentar a polarização política e de falhar na proteção dos direitos humanos e do meio ambiente. Em 2023, após a derrota nas eleições presidenciais, Bolsonaro se tornou uma figura relevante da oposição e segue sendo uma figura central na política brasileira, apesar de algumas de suas ações após deixar o cargo, como a contestação do resultado das eleições de 2022.
</Text>

<Text style={styles.sectionTitle}>Políticas Ambientais</Text>
<Text style={styles.historicalText}>
  A gestão de Bolsonaro em relação ao meio ambiente foi marcada por controvérsias, especialmente em relação à Amazônia. Durante seu governo, o desmatamento na região aumentou significativamente, o que gerou críticas internas e externas, incluindo protestos internacionais. Bolsonaro, em várias ocasiões, minimizou as críticas e defendeu a exploração dos recursos naturais da Amazônia como uma forma de promover o desenvolvimento econômico do país, apesar das preocupações ambientais e climáticas globais.
</Text>

<Text style={styles.sectionTitle}>Relacionamento com as Forças Armadas</Text>
<Text style={styles.historicalText}>
  Bolsonaro, como ex-militar, manteve uma relação muito estreita com as Forças Armadas durante sua presidência. Ao longo de seu governo, ele nomeou militares para vários cargos importantes, tanto no governo quanto em estatais. Seu apoio às Forças Armadas foi uma característica de seu governo, com muitas de suas políticas sendo alinhadas com interesses militares, especialmente no que diz respeito à segurança pública e à defesa de uma maior autonomia dos militares no governo.
</Text>

        {/* Seção do componente de pesquisa */}
        <Text style={styles.sectionTitle}>Pesquisa de Notícias</Text>
        <Pesquisa /> {/* Adicione o componente de pesquisa aqui */}

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    backgroundColor: 'rgba(244, 248, 211, 0.85)',
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(244, 248, 211, 0.85)',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FB773C',
    marginTop: 15,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  historicalText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 10,
    textAlign: 'justify',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#73C7C7',
    padding: 12,
    borderRadius: 8,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
