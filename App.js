import React, { Component } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ideal from "./src/Ideal";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      gasolina: null,
      alcool: null,
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    if (this.state.alcool != null || this.state.gasolina != null) {
      this.setState({ modalVisible: true });
    }
  }

  sair(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require("./src/img/logo.png")} style={styles.logo} />
        <Text style={styles.titulo}>Qual melhor opção?</Text>
        <View style={styles.viewInput}>
          <Text style={styles.label}>Álcool (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o preço do álcool"
            onChangeText={(value) => this.setState({ alcool: value })}
          />
        </View>
        <View style={styles.viewInput}>
          <Text style={styles.label}>Gasolina (preço por litro):</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o preço do gasolina"
            onChangeText={(value) => this.setState({ gasolina: value })}
          />
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn} onPress={this.entrar}>
            <Text style={styles.btnText}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <Modal animationType="slide" visible={this.state.modalVisible}>
          <Ideal
            alcool={this.state.alcool}
            gasolina={this.state.gasolina}
            fechar={() => this.sair(false)}
          />
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 32,
  },
  logo: {
    marginBottom: 32,
  },
  viewInput: {
    width: "100%",
    padding: 12,
  },
  label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    fontSize: 22,
    borderRadius: 6,
  },
  btnView: {
    marginTop: 12,
    width: "100%",
    padding: 12,
  },
  btn: {
    backgroundColor: "#e92925",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  btnText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});
