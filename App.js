import React from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import  Header from "./componentes/header";
import Card from "./componentes/card";
import PRODUTOS from './data';

export default function App() {
  return (
    <View style={estilo.container}>

     <Header></Header>
   <View style = {{width: '100%'}}>
     <FlatList
      data = {PRODUTOS}
      keyExtractor = {(item)=>item.id}
      renderItem = {({item}) => (

            <Card 
            id = {item.id}
            imagem = {item.imagem}
            titulo = {item.titulo}
            descricao = {item.descricao}
            preco = {item.preco}
            
            /> 
      )}
     />
     </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'pink',
  },
})

