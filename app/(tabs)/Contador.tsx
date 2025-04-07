import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useTarefas } from '../hooks/useTarefas';

export default function App() {
  const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

  const cores = {
    default: '#ADD8E6',
    comprar: '#FFD700',
    estudar: '#98FB98',
    trabalhar: '#FFA07A',
    exercicio: '#87CEEB',
    ler: '#DDA0DD',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={novaTarefa}
          onSubmitEditing={adicionarTarefa}
          onChangeText={setNovaTarefa}
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.tarefaTexto}>{item.texto}</Text>
              <TouchableOpacity
                style={styles.remover}
                onPress={() => removerTarefa(item.id)}
              >
                <Text style={styles.textoRemover}>X</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 40) / 2 - 10; 
const cardHeight = cardWidth * 1.2; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F8D3',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ADD8E6',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  botaoAdicionar: {
    backgroundColor: '#003366',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lista: {
    paddingBottom: 20,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 15,
    padding: 15,
    width: cardWidth,
    height: cardHeight,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
    backgroundColor: '#A1EEBD',
    borderColor: '#F7CFD8',
    borderWidth: 2,
  },
  tarefaTexto: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    flexShrink: 1, // Permite que o texto quebre linha se necessário
  },
  remover: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 5,
  },
  textoRemover: {
    fontSize: 14,
    color: '#FF7F50',
    fontWeight: 'bold',
  },
});