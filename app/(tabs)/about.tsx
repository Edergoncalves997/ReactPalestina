import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Link } from 'expo-router';
import Button from '@/app/components/Button';

export default function About() {
  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Sobre Jair Bolsonaro</Text>

          <Text style={styles.historicalText}>
            Jair Bolsonaro é um ex-militar e político brasileiro que serviu como presidente do Brasil de 2019 a 2023. Sua presidência foi marcada por posições conservadoras, políticas de combate à corrupção e uma postura frequentemente polêmica em relação à saúde pública, meio ambiente e direitos humanos.
          </Text>

          <Text style={styles.sectionTitle}>Início de Carreira</Text>
          <Text style={styles.historicalText}>
            Bolsonaro começou sua carreira política em 1988, quando foi eleito vereador do Rio de Janeiro. Em 1991, foi eleito deputado federal, cargo que ocupou por sete mandatos consecutivos até sua eleição à presidência em 2018.
          </Text>

          <Text style={styles.sectionTitle}>Eleição Presidencial</Text>
          <Text style={styles.historicalText}>
            Em 2018, Bolsonaro se elegeu presidente do Brasil com um discurso de combate à corrupção e à violência, além de prometer um governo mais liberal na economia. Sua campanha atraiu tanto apoiadores quanto críticas pela retórica agressiva e polêmica.
          </Text>

          <Text style={styles.sectionTitle}>Políticas e Controvérsias</Text>
          <Text style={styles.historicalText}>
            Durante sua presidência, Bolsonaro adotou políticas de liberalização econômica, privatizações e redução da intervenção estatal. Contudo, seu governo também gerou controvérsias por sua gestão da pandemia de COVID-19, com minimização dos impactos do vírus e oposição às medidas de restrição.
          </Text>

          <Text style={styles.sectionTitle}>Meio Ambiente</Text>
          <Text style={styles.historicalText}>
            A gestão ambiental foi outro ponto de conflito. Bolsonaro foi criticado por políticas que favoreciam o agronegócio e a mineração na Amazônia, o que levou a um aumento no desmatamento e tensões com organizações internacionais.
          </Text>

          <Text style={styles.sectionTitle}>Fim do Mandato</Text>
          <Text style={styles.historicalText}>
            Bolsonaro terminou seu mandato em 2023, deixando um legado controverso, com uma base de apoio fiel, mas também um significativo número de críticos que apontam falhas em várias áreas da política pública.
          </Text>

          <Text style={styles.sectionTitle}>Legado e Controvérsias Pós-Presidência</Text>
          <Text style={styles.historicalText}>
            Após deixar o cargo, Bolsonaro continuou a ser uma figura polarizadora no cenário político brasileiro, com ações judiciais e investigações sobre sua administração, além de continuar com sua influência política no Brasil.
          </Text>
          <Button theme = 'primary' label = 'inicio' url ='http://localhost:8081/'/>
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
