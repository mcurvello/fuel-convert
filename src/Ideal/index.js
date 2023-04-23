import React, { Component } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default class Ideal extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("../img/gas.png")} style={styles.logo} />
        <Text style={styles.titulo}>
          Compensa usar{" "}
          {this.props.alcool / this.props.gasolina < 0.7
            ? "Álcool"
            : "Gasolina"}
        </Text>
        <View style={styles.valores}>
          <Text style={styles.precos}>Com os preços:</Text>
          <Text style={styles.label}>Álcool: R$ {this.props.alcool}</Text>
          <Text style={styles.label}>Gasolina: R$ {this.props.gasolina}</Text>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn} onPress={this.props.fechar}>
            <Text style={styles.btnText}>Calcular novamente</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#31ef47",
    marginBottom: 32,
  },
  logo: {
    marginBottom: 32,
  },
  precos: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  valores: {
    width: "100%",
    padding: 12,
    alignItems: "center",
  },
  label: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    padding: 16,
    backgroundColor: "#fff",
    fontSize: 22,
    borderRadius: 6,
  },
  btnView: {
    marginTop: 12,
    padding: 12,
  },
  btn: {
    borderColor: "#e92925",
    borderWidth: 2,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    paddingHorizontal: 32,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e92925",
  },
});
