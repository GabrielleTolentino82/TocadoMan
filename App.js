import React from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from "react-native";
import Header from "./componentes/header";
import Card from "./componentes/card";
import PRODUTOS from './data';
import Footer from "./componentes/footer";

export default function App() {
  return (
    <View style={estilo.container}>

     <Header />
     <Image style={{width: '90%', aspectRatio: 6, borderRadius: 15}} source={{uri: 'https://img.freepik.com/premium-vector/vector-red-fire-sparks-flying-up-burning-glowing-particles-flame-fire-with-sparks-isolated-black-transparent-background_221648-554.jpg'}}/>
   <View style = {{flex: 1, width: '100%'}}>
     <FlatList
      data = {PRODUTOS}
      keyExtractor = {(item)=>item.id}
      numColumns={2}
      renderItem = {({item}) => (
        <TouchableOpacity style={{margin: 20, marginLeft: '6%'}}>
            <Card 
            id = {item.id}
            imagem = {item.imagem}
            titulo = {item.titulo}
            descricao = {item.descricao}
            preco = {item.preco}
            
            /> 
       </TouchableOpacity>
      )}
     />
     </View>
     <Footer />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'pink',
    
  },
  
})
