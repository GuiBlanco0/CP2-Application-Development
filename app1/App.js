import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";
import Cartao from "./Cartao";
import atores from "./dados";

export default function App() {
  const [busca, setBusca] = useState("");

  // Filtra pelo nome a cada digitação (equivalente ao oninput)
  const filtrados = atores.filter((ator) =>
    ator.nome.toLowerCase().includes(busca.toLowerCase().trim())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.titulo}>🎬 Atores e Atrizes</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar ator ou atriz pelo nome..."
        placeholderTextColor="#8b90a8"
        value={busca}
        onChangeText={setBusca}
      />

      <Text style={styles.contador}>
        {filtrados.length} de {atores.length} pessoas
      </Text>

      <FlatList
        data={filtrados}
        keyExtractor={(item) => String(item.id)}
        numColumns={2}
        renderItem={({ item }) => <Cartao ator={item} />}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <View style={styles.vazio}>
            <Text style={styles.vazioTexto}>
              Nenhum ator ou atriz encontrado.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12141c",
    paddingTop: 40,
  },
  titulo: {
    color: "#eaeaf0",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#1c1f2b",
    color: "#eaeaf0",
    borderWidth: 2,
    borderColor: "#2c3042",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 18,
    fontSize: 16,
    marginHorizontal: 16,
  },
  contador: {
    color: "#8b90a8",
    fontSize: 13,
    textAlign: "center",
    marginVertical: 12,
  },
  lista: {
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  vazio: {
    padding: 40,
    alignItems: "center",
  },
  vazioTexto: {
    color: "#8b90a8",
  },
});