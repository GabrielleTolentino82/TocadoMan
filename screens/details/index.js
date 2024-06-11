import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function home() {
  const route = useRoute();

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>{route.params.titulo}</Text>
      <Image style={estilo.imagem} source={{ uri: route.params.imagem }} />
      <Text style={estilo.descricao}>{route.params.descricao}</Text>
      <Text style={estilo.preco}>{"R$ " + route.params.preco}</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  infoContainer: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
    textAlign: 'center',
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  descricao: {
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'yellow',
    marginVertical: 10,
    textAlign: 'center',
  },
});