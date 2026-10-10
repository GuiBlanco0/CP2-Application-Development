import { View, Text, Image, StyleSheet } from "react-native";

// Converte "1979-08-27" em "27/08/1979"
function formatarData(data) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

export default function Cartao({ ator }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: ator.foto }} style={styles.foto} />
      <Text style={styles.nome}>{ator.nome}</Text>
      <Text style={styles.info}>País: {ator.pais}</Text>
      <Text style={styles.info}>Nascimento: {formatarData(ator.nascimento)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#1c1f2b",
    borderRadius: 12,
    margin: 6,
    paddingBottom: 14,
    overflow: "hidden",
    alignItems: "center",
  },
  foto: {
    width: "100%",
    aspectRatio: 3 / 4,
    backgroundColor: "#2c3042",
  },
  nome: {
    color: "#eaeaf0",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 6,
    paddingHorizontal: 8,
  },
  info: {
    color: "#a8adc4",
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 8,
  },
});