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
        numColumns={1}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.tarefaTexto}>{item.texto}</Text>
            <TouchableOpacity
              style={styles.remover}
              onPress={() => removerTarefa(item.id)}
            >
              <Text style={styles.textoRemover}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.lista}
      />

    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const spacing = 8;
const availableWidth = screenWidth - (spacing * 3); // espaço para 2 cards + 3 espaços (bordas e meio)
const cardWidth = availableWidth / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing,
    backgroundColor: '#F4F8D3',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: spacing * 1.5,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: spacing * 1.5,
    gap: spacing,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ADD8E6',
    borderRadius: 6,
    padding: spacing,
    backgroundColor: '#FFFFFF',
    fontSize: 14,
  },
  botaoAdicionar: {
    backgroundColor: '#003366',
    paddingVertical: spacing * 0.8,
    paddingHorizontal: spacing * 1.5,
    borderRadius: 6,
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  lista: {
    paddingBottom: spacing,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: spacing/2,
  },
  card: {
    width: '100%',
    aspectRatio: 4, // proporção horizontal, ajustável conforme seu gosto
    padding: spacing,
    borderRadius: 6,
    backgroundColor: '#A1EEBD',
    borderColor: '#F7CFD8',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: spacing,
  },  
  tarefaTexto: {
    fontSize: 12, 
    color: '#000000',
    textAlign: 'center',
    flexShrink: 1,
  },
  remover: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 4,
    width: 16, 
    height: 16, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoRemover: {
    fontSize: 10, 
    color: '#FF7F50',
    fontWeight: 'bold',
  },
});